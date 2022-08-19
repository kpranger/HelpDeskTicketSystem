import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  @Output() created = new EventEmitter<Ticket>();

  newTicket:Ticket = {} as Ticket;
  tickets:Ticket[] = [];

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
  }

  NewTicket(form:NgForm):Ticket {
    this.newTicket.title = form.form.value.title;
    this.newTicket.details = form.form.value.details;
    this.newTicket.status = "Open";
    this.newTicket.submittedUserId = form.form.value.submittedUserId;
    this.newTicket.submittedDate = new Date(); 
    this.newTicket.favoritedUserId=null;
    this.newTicket.resolvedUserId=null;
    this.newTicket.resolutionDetails= null;
    this.newTicket.resolvedDate = null;
    this.newTicket.category=form.form.value.helpCategory 
    this.ticketService.addTicket(this.newTicket).subscribe((response:Ticket) => {
      console.log(response)
      this.tickets.push(response) //once new ticket is back from DB (we sent to addTicket - this line will make the new item display )
      this.created.emit(response) //sends the ticket out of component 
    })
    return this.newTicket;

}
}
