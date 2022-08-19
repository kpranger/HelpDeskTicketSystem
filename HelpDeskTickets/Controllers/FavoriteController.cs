using HelpDeskTickets.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskTickets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        HelpDeskDBContext context = new HelpDeskDBContext();
        [HttpPatch("AddToFavorites/{id}")]
        public Favorite addToFavorites(int id, string firstName, string lastName)
        {
            User user = context.Users.FirstOrDefault(u => u.FirstName == firstName && u.LastName == lastName);
            Ticket favTicket = context.Tickets.FirstOrDefault(t => t.TicketId == id);
            Favorite favorite = new Favorite();
            favorite.TicketId = favTicket.TicketId;
            favorite.UserId = user.UserId;
            favTicket.FavoritedUserId = user.UserId;
            context.Tickets.Update(favTicket);
            context.Favorites.Add(favorite);
            context.SaveChanges();
            return favorite;
        }

        [HttpGet("GetAllFavorites")]
        public List<Ticket> getAllFavorites(string firstName, string lastName)
        {
            int UserID = context.Users.FirstOrDefault(u => u.FirstName == firstName && u.LastName == lastName).UserId;
            List<Ticket> favoritesList = context.Favorites.Where(u => u.UserId == UserID).Include(f => f.Ticket).Select(f => f.Ticket).ToList();
            return favoritesList;
        }
    }
}
