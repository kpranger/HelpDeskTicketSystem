import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket = {} as Ticket; 
  favorites:Favorite[] = [];
  showFavorites:boolean = false;
  showResolve:boolean = false;

  constructor(private route:ActivatedRoute, private ticketService:TicketService, private favoritesService:FavoritesService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);
    this.ticketService.getTicketById(id).subscribe((response:Ticket) => {
      this.ticket = response;
      console.log(response);
    });
   
  }

  toggleFavorites():void{
    this.showFavorites = !this.showFavorites;
  }

  toggleResolve():void{
    this.showResolve = !this.showResolve;
  }

}
