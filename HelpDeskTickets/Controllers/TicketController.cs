using HelpDeskTickets.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [http]

        [HttpPost("AddTicket")]
        public Ticket AddTicket(string title, string details, string status, int submittedUserId, DateTime submittedDate,
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
        public Ticket DeleteTicket(int id)
        {
            Ticket ticket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            context.Tickets.Remove(ticket);
            context.SaveChanges();

            return ticket;
        }
    }
}
