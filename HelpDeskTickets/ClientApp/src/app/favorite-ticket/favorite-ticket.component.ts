import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-favorite-ticket',
  templateUrl: './favorite-ticket.component.html',
  styleUrls: ['./favorite-ticket.component.css']
})
export class FavoriteTicketComponent implements OnInit {

  constructor(private ticketService:TicketService, private favoritesService:FavoritesService) { }

  ticket: Ticket = {} as Ticket; 
  favorites:Favorite[] = [];

  ngOnInit(): void {
  }

  FavoriteTicket(form:NgForm):void{
    this.favoritesService.addToFavorites(this.ticket.ticketId, form.form.value.FirstName, form.form.value.LastName).subscribe((response:any) => this.favorites.push(response));
    
  }
}
