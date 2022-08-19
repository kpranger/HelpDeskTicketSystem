import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  constructor(private route:ActivatedRoute, private ticketService:TicketService) { }

  updateTicket:Ticket = {} as Ticket;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    this.ticketService.getTicketById(id).subscribe((response:Ticket) => {
      console.log(response);
        this.updateTicket = response;
    });
  }

  UpdateTicket(form:NgForm):Ticket {

    this.updateTicket.resolvedUserId=null;
    this.updateTicket.resolutionDetails= null;
    this.updateTicket.resolvedDate = null;
    this.updateTicket.category=form.form.value.helpCategory 
    this.ticketService.addTicket(this.updateTicket).subscribe((response:Ticket) => {
      console.log(response)
    })
    return this.updateTicket;

  }

 
}
