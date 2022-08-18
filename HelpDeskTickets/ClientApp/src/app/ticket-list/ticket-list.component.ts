import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  tickets:Ticket[] = [];
  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe((response: Ticket[]) => {
      console.log(response);
        this.tickets = response;
    });
  }

}
