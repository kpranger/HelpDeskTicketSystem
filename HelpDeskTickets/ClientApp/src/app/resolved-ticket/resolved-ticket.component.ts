import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-resolved-ticket',
  templateUrl: './resolved-ticket.component.html',
  styleUrls: ['./resolved-ticket.component.css']
})
export class ResolvedTicketComponent implements OnInit {

  constructor(private route:ActivatedRoute, private ticketService:TicketService) { }

  updateTicket:Ticket = {} as Ticket;

  ngOnInit(): void {
  }

  UpdateTicket(form:NgForm):Ticket {

    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    this.ticketService.updateTicket(id, form.form.value.resolvedUserId, form.form.value.resolutionDetails, new Date()).subscribe((response:Ticket) => {
      this.updateTicket=response;
    })
    return this.updateTicket;

  }
}
