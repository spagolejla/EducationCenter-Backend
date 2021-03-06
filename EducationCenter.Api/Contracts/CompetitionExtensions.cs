﻿using EducationCenter.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public static class CompetitionExtensions
    {
        public static CompetitionDTO ToDTO(this Competition competition)
        {
            return new CompetitionDTO()
            {
               Id = competition.Id,
               Title = competition.Title,
               CourseName = competition.Course.Name,
               Active = competition.Active,
               Description = competition.Description,
               EndDate = competition.EndDate,
               StartDate = competition.StartDate,
               MaxCandidatesNumber = competition.MaxCandidatesNumber,
               CourseId = competition.Course.Id,
                LecturesNumber = competition.Course.NumberOfLectures,
                CourseStartDate = competition.Course.StartDate,
                Price = competition.Course.Price,
                CourseStartTime = competition.Course.ClassStartTime,
                DaysOfWeek = competition.Course.DaysOfWeek


            };
        }

        public static IEnumerable<CompetitionDTO> ToDTOList(this IEnumerable<Competition> competitions)
        {
            var competitionsDTO = new List<CompetitionDTO>();
            foreach (var item in competitions)
            {
                competitionsDTO.Add(item.ToDTO());
            }
            return competitionsDTO;
        }
    }
}
