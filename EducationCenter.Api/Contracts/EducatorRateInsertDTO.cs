﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationCenter.Api.Contracts
{
    public class EducatorRateInsertDTO
    {
        public int EducatorId { get; set; }
        public int StudentId { get; set; }
        public int Rate { get; set; }
        public string Comment { get; set; }
    }
}
