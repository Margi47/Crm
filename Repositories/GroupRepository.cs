﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace angular.Models
{
    public class GroupRepository : CrudRepository<Group>, IGroupRepository
    {
        public GroupRepository(CrmContext context) : base(context)
        { }

        public override Func<Group, bool> GetExpression(int key)
        {
            return Group => Group.Id == key; ;
        }

        public override DbSet<Group> GetQuery(CrmContext context)
        {
            return context.Groups;
        }

        public User GetUser(int userId)
        {
            return Context.Users.FirstOrDefault(u => u.Id == userId);
        }

        public IEnumerable<User> GetTeachers(int groupId)
        {
            return Context.Groups.Where(g => g.Id == groupId)
                .SelectMany(g => g.Teachers)
                .Select(t => t.Teacher)
                .Select(t => t.User)
                .ToList();
        }

        public void AddTeachers(int groupId, int[] teachers)
        {
            var existingItems = Context.GroupTeachers.Where(g => g.GroupId == groupId && teachers.Contains(g.TeacherId))
                        .Select(g => g.TeacherId)
                        .ToArray();
            var newTeachers = teachers.Except(existingItems);

            foreach (var t in newTeachers)
            {
                Context.GroupTeachers.Add(new GroupTeachers { GroupId = groupId, TeacherId = t });
            }
            Context.SaveChanges();
        }

        public void RemoveTeacher(int groupId, int teacherId)
        {
            if (Context.GroupTeachers.Any(x => x.TeacherId == teacherId && x.GroupId == groupId))
            {
                var entity = Context.GroupTeachers.First(g => g.GroupId == groupId && g.TeacherId == teacherId);

                Context.GroupTeachers.Remove(entity);
            }
        }
    }
}