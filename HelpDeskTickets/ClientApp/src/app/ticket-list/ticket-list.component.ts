import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import {Form, NgForm} from '@angular/forms'

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  newTicket:Ticket = {} as Ticket;

  tickets:Ticket[] = [];
  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((response: Ticket[]) => {
      console.log(response);
        this.tickets = response;
    });
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
    })
    return this.newTicket;

  }

}
