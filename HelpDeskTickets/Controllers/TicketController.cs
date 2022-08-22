using HelpDeskTickets.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace HelpDeskTickets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        HelpDeskDBContext context = new HelpDeskDBContext();

        [HttpGet("GetAllTickets")]
        public List<Ticket> getAllTickets()
        {
            return context.Tickets.ToList();
        }

        [HttpGet("GetTicketById/{id}")]
        public Ticket getTicketById(int id)
        {
            return context.Tickets.FirstOrDefault(t => t.TicketId == id);
        }

        [HttpGet("GetByStatus/{status}")]
        public List<Ticket> getTicketByStatus(string status)
        {
            return context.Tickets.Where(t => t.Status == status).ToList();
        }

        [HttpGet("GetByCategory/{category}")]
        public List<Ticket> getTicketByCategory(string category)
        {
            return context.Tickets.Where(t => t.Category == category).ToList();
        }

        [HttpPatch("UpdateTicket/{id}")]
        public Ticket updateTicket(int id, string? status, int? favoritedUserId, int? resolvedUserId, string? resolutionDetails)
        {
            Ticket updatedTicket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            updatedTicket.Status = status;
            updatedTicket.FavoritedUserId = favoritedUserId;
            updatedTicket.ResolvedUserId = resolvedUserId;
            updatedTicket.ResolutionDetails = resolutionDetails;
            updatedTicket.ResolvedDate = DateTime.Now;
            context.SaveChanges();

            return updatedTicket;
        }

        [HttpPost("AddTicket")]
        public Ticket addTicket(string title, string details, int submittedUserId, 
            string category)
        {
            Ticket newTicket = new Ticket();
            newTicket.Title = title;
            newTicket.Details = details;
            newTicket.Status = "Open";
            newTicket.SubmittedUserId = submittedUserId;
            newTicket.SubmittedDate = DateTime.Now;
            //newTicket.FavoritedUserId = favoritedUserId;
            //newTicket.ResolvedUserId = resolvedUserId;
            //newTicket.ResolutionDetails = resolutionDetails;
            //newTicket.ResolvedDate = null;
            newTicket.Category = category;
            context.Tickets.Add(newTicket);
            context.SaveChanges();
            //had to remove the dateTime in the paramater list due to Typescript issues (8/19) 
            return newTicket;
        }

        [HttpDelete("DeleteTicket/{id}")]
        public Ticket deleteTicket(int id)
        {
            Ticket ticket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            context.Tickets.Remove(ticket);
            context.SaveChanges();

            return ticket;
        }



        //Add this to user controller, update in Angular
        [HttpPost("AddNewUser")]
        public User AddNewUser(string firstName, string lastName)
        {
            User newUser = new User();
            newUser.FirstName = firstName;
            newUser.LastName = lastName;
            context.Users.Add(newUser);
            context.SaveChanges();
            return newUser;
        }

        [HttpGet("GetAllUsers")]
        public List<User> GetAllUsers()
        {
            return context.Users.ToList();
        }

        [HttpGet("CheckUserExists")]
        public bool CheckUserExists(string firstName, string lastName)
        {
            List<User> allUsers = context.Users.ToList();
            User check = allUsers.FirstOrDefault(n => n.FirstName == firstName && n.LastName == lastName);
            if(check == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}