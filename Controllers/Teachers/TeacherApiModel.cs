﻿using angular.Controllers.Groups;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace angular.Controllers.Users
{
    public class TeacherApiModel
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(25)]
        public string Name { get; set; }
    }
}
