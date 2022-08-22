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
  showForm:boolean = false;
  showOpens:boolean = false;
  byStatus:Ticket[] = [];

  tickets:Ticket[] = [];
  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((response: Ticket[]) => {
      console.log(response);
        this.tickets = response;
    });
  }

  NewTicket(createdTicket:Ticket):void {
    
    this.tickets.push(createdTicket)

  }

  ToggleDisplay(){
    this.showForm= !this.showForm;
  }

  ToggleStatus(status:string){
    this.showOpens = !this.showOpens;
    this.ticketService.getByStatus(status).subscribe((response:Ticket[]) =>this.byStatus=response)
    console.log(this.byStatus)
  }

}
