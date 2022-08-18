using System;
using System.Collections.Generic;

namespace HelpDeskTickets.Models
{
    public partial class Ticket
    {
        public int TicketId { get; set; }
        public string? Title { get; set; }
        public string? Details { get; set; }
        public string? Status { get; set; }
        public int? SubmittedUserId { get; set; }
        public DateTime? SubmittedDate { get; set; }
        public int? FavoritedUserId { get; set; }
        public int? ResolvedUserId { get; set; }
        public string? ResolutionDetails { get; set; }
        public DateTime? ResolvedDate { get; set; }
        public string? Category { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual User? FavoritedUser { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual User? ResolvedUser { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual User? SubmittedUser { get; set; }
    }
}
