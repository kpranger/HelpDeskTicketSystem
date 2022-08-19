import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  constructor(private favoritesService:FavoritesService) { }

  favTickets:Ticket[] = [];
  firstName:string = '';
  lastName:string = '';
  ngOnInit(): void {

  }
  
  showFavorites(form:NgForm){
    this.firstName  = form.form.value.FirstName;
    this.lastName = form.form.value.LastName;
    this.favoritesService.getFavorites(form.form.value.FirstName, form.form.value.LastName).subscribe((response:Ticket[]) =>{
    this.favTickets = response;});
  }

  removeFromFavorites(t:Ticket){
    t.favoritedUserId = null;
    let index:number = this.favTickets.indexOf(t); 
    this.favTickets.splice(index, 1);

    this.favoritesService.removeFromFavorites(t.ticketId, this.firstName, this.lastName).subscribe((response:number) => {
      console.log(response);
    })
  }
}
