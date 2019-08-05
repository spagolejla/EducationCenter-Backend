using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EducationCenter.Core.Entities;
using EducationCenter.Infrastructure.Data;
using EducationCenter.Core.Interfaces;
using EducationCenter.Api.Contracts;

namespace EducationCenter.Api.Controllers
{

    [ApiController]
    public class CompetitionsController : ControllerBase
    {
        private readonly ICompetitionRepository _competitionRepositry;
        private readonly IEducatorRepository _educatorRepository;



        public CompetitionsController(ICompetitionRepository competitionRepositry, IEducatorRepository educatorRepository)
        {
            _competitionRepositry = competitionRepositry;
            _educatorRepository = educatorRepository;
        }

        [Route("api/competitions")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompetitionDTO>>> GetAllCompetitions()
        {
            IEnumerable<Competition> competitions = await _competitionRepositry.GetAllCompetitions();
            IEnumerable<CompetitionDTO> competitionsDTO = competitions.ToDTOList();

            foreach (var item in competitionsDTO)
            {
                IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(item.Id);
                if (applications.Count() != 0)
                {
                    item.Applications = applications.ToDTOList();
                    item.CurrentCandidatesNumber = applications.Count();
                }
            }
            return Ok(competitionsDTO);

        }

        [Route("api/competition/{id}")]
        [HttpGet]
        public async Task<ActionResult<CompetitionDTO>> GetById(int id)
        {
            Competition competition = await _competitionRepositry.GetById(id);
            CompetitionDTO competitionDTO = competition.ToDTO();
            IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(competitionDTO.Id);
            Educator edc = await _educatorRepository.GetByCourseId(competitionDTO.CourseId);

            competitionDTO.Educator = edc.ToDTO();
            if (applications.Count() != 0)
            {
                competitionDTO.Applications = applications.ToDTOList();

                competitionDTO.CurrentCandidatesNumber = applications.Count();

              
            }
          

            return Ok(competitionDTO);
        }
        [Route("api/competition/details/{id}")]
        [HttpGet]
        public async Task<ActionResult<CompetitionInsertDTO>> GetDetailsById(int id)
        {
            Competition competition = await _competitionRepositry.GetById(id);
            CompetitionInsertDTO comp = new CompetitionInsertDTO()
            {
                Id = competition.Id,
                Active = competition.Active,
                CourseId = competition.CourseId,
                Description = competition.Description,
                EndDate = competition.EndDate,
                MaxCandidates = competition.MaxCandidatesNumber,
                Title = competition.Title
            };
          
          

           


            return Ok(comp);
        }

        [Route("api/educator/competitions/{educatorId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompetitionDTO>>> GetCompetitionsByEducator(int educatorId)
        {
            IEnumerable<Competition> competitions = await _competitionRepositry.GetByEducatorId(educatorId);
            IEnumerable<CompetitionDTO> competitionsDTO = competitions.ToDTOList();


            Educator edc = await _educatorRepository.GetByCourseId(competitionsDTO.FirstOrDefault().CourseId);


            foreach (var item in competitionsDTO)
            {
                item.Educator = edc.ToDTO();
                IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(item.Id);
                if (applications.Count() != 0)
                {
                    item.Applications = applications.ToDTOList();
                    item.CurrentCandidatesNumber = applications.Count();
                   
                }
            }
            return Ok(competitionsDTO);

        }

        [Route("api/educator/active/competitions/{educatorId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompetitionDTO>>> GetActiveCompetitionsByEducator(int educatorId)
        {
            IEnumerable<Competition> competitions = await _competitionRepositry.GetActiveCompetitions(educatorId);
            IEnumerable<CompetitionDTO> competitionsDTO = competitions.ToDTOList();
            Educator edc = await _educatorRepository.GetByCourseId(competitionsDTO.FirstOrDefault().CourseId);
            foreach (var item in competitionsDTO)
            {
                item.Educator = edc.ToDTO();
                IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(item.Id);
                if (applications.Count() != 0)
                {
                    item.Applications = applications.ToDTOList();
                    item.CurrentCandidatesNumber = applications.Count();
                   
                }
            }
            return Ok(competitionsDTO);

        }

        [Route("api/student/competitions/{studentId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompetitionDTO>>> GetCompetitionsByStudent(int studentId)
        {
            IEnumerable<Competition> competitions = await _competitionRepositry.GetByStudentId(studentId);
            IEnumerable<CompetitionDTO> competitionsDTO = competitions.ToDTOList();

            foreach (var item in competitionsDTO)
            {
                IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(item.Id);
                if (applications.Count() != 0)
                {
                    item.Applications = applications.ToDTOList();
                    item.CurrentCandidatesNumber = applications.Count();
                }
               
            }
            return Ok(competitionsDTO);

        }


        [HttpPost]
        [Route("api/competition")]
        public async Task<ActionResult> PostCompetition(CompetitionInsertDTO competition)
        {
            Competition newCompetition = new Competition()
            {
                Active = true,
                CourseId = competition.CourseId,
                Description = competition.Description,
                Title = competition.Title,
                MaxCandidatesNumber = competition.MaxCandidates,
                EndDate = competition.EndDate,
                StartDate = DateTime.Now
            };

            var competitionId = await _competitionRepositry.AddCompetition(newCompetition);
            return Ok();
        }


        [HttpPut]
        [Route("api/competition")]
        public async Task<ActionResult> PutCompetition(CompetitionInsertDTO comp)
        {
            var _comp = await _competitionRepositry.GetById(comp.Id);


            if (_comp == null)
            {
                return NotFound();
            }

            _comp.Title = comp.Title;
            _comp.Description = comp.Description;
            _comp.MaxCandidatesNumber = comp.MaxCandidates;
            _comp.EndDate = comp.EndDate;
            _comp.Active = comp.Active;

            _competitionRepositry.UpdateCompetition(_comp);
          

            

            return NoContent();
        }

    }
}
