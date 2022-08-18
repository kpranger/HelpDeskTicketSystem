import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket = {} as Ticket;  

  constructor(private route:ActivatedRoute, private ticketService:TicketService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);
    this.ticketService.getTicketById(id).subscribe((response:Ticket) => {
      this.ticket = response;
      console.log(response);
    });
  }

}
