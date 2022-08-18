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

        [HttpGet("GetTicketById")]
        public Ticket getTicketById(int id)
        {
            return context.Tickets.FirstOrDefault(t => t.TicketId == id);
        }

        [HttpGet("GetByStatus")]
        public List<Ticket> getTicketByStatus(string status)
        {
            return context.Tickets.Where(t => t.Status == status).ToList();
        }

        [HttpGet("GetByCategory")]
        public List<Ticket> getTicketByCategory(string category)
        {
            return context.Tickets.Where(t => t.Category == category).ToList();
        }

    }
}
