using System;
using System.Collections.Generic;

namespace HelpDeskTickets.Models
{
    public partial class User
    {
        public User()
        {
            Favorites = new HashSet<Favorite>();
            TicketFavoritedUsers = new HashSet<Ticket>();
            TicketResolvedUsers = new HashSet<Ticket>();
            TicketSubmittedUsers = new HashSet<Ticket>();
        }

        public int UserId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Favorite> Favorites { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Ticket> TicketFavoritedUsers { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Ticket> TicketResolvedUsers { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Ticket> TicketSubmittedUsers { get; set; }
    }
}
