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


        public CompetitionsController(ICompetitionRepository competitionRepositry)
        {
            _competitionRepositry = competitionRepositry;
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
            return Ok(competitions);

        }

        [Route("api/competition/{id}")]
        [HttpGet]
        public async Task<ActionResult<CompetitionDTO>> GetById(int id)
        {
            Competition competition = await _competitionRepositry.GetById(id);
            CompetitionDTO competitionDTO = competition.ToDTO();
            IEnumerable<CompetitionApplication> applications = await _competitionRepositry.GetAllApplications(competitionDTO.Id);
            if (applications.Count() != 0)
            {
                competitionDTO.Applications = applications.ToDTOList();

                competitionDTO.CurrentCandidatesNumber = applications.Count();
            }
          

            return Ok(competitionDTO);
        }

        [Route("api/educator/competitions/{educatorId}")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompetitionDTO>>> GetCompetitionsByEducator(int educatorId)
        {
            IEnumerable<Competition> competitions = await _competitionRepositry.GetByEducatorId(educatorId);
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
            return Ok(competitions);

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
            return Ok(competitions);

        }

    }
}
