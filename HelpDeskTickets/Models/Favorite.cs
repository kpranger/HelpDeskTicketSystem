using System;
using System.Collections.Generic;

namespace HelpDeskTickets.Models
{
    public partial class Favorite
    {
        public int? UserId { get; set; }
        public int? TicketId { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Ticket? Ticket { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual User? User { get; set; }
    }
}
