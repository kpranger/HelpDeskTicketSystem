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
        public Ticket updateTicket(int id, string? status, int? favoritedUserId, int? resolvedUserId, string? resolutionDetails, DateTime? resolvedDate)
        {
            Ticket updatedTicket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            updatedTicket.Status = status;
            updatedTicket.FavoritedUserId = favoritedUserId;
            updatedTicket.ResolvedUserId = resolvedUserId;
            updatedTicket.ResolutionDetails = resolutionDetails;
            updatedTicket.ResolvedDate = resolvedDate;
            context.SaveChanges();

            return updatedTicket;
        }

        [HttpPost("AddTicket")]
        public Ticket addTicket(string title, string details, string status, int submittedUserId, DateTime submittedDate,
            int? favoritedUserId, int? resolvedUserId, string? resolutionDetails, DateTime? resolvedDate, string category)
        {
            Ticket newTicket = new Ticket();
            newTicket.Title = title;
            newTicket.Details = details;
            newTicket.Status = status;
            newTicket.SubmittedUserId = submittedUserId;
            newTicket.SubmittedDate = submittedDate;
            newTicket.FavoritedUserId = favoritedUserId;
            newTicket.ResolvedUserId = resolvedUserId;
            newTicket.ResolutionDetails = resolutionDetails;
            newTicket.ResolvedDate = resolvedDate;
            newTicket.Category = category;
            context.Tickets.Add(newTicket);
            context.SaveChanges();

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

        [HttpPatch("AddToFavorites/{id}")]
        public Favorite addToFavorites(int id, string firstName, string lastName)
        {
            User user = context.Users.FirstOrDefault(u => u.FirstName == firstName && u.LastName == lastName);
            Ticket favTicket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            Favorite favorite = new Favorite();
            favorite.TicketId = favTicket.TicketId;
            favorite.UserId = user.UserId;
            context.Favorites.Add(favorite);
            context.SaveChanges();
            return favorite;
        }

        [HttpGet("GetAllFavorites/{userId}")]
        public List<Favorite> getAllFavorites(int userId)
        {
            List<Favorite> favoritesList = context.Favorites.Where(u => u.UserId == userId).Include(f => f.Ticket).ToList();
            return favoritesList;
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
    }
}