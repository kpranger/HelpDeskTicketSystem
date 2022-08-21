import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorite-ticket',
  templateUrl: './favorite-ticket.component.html',
  styleUrls: ['./favorite-ticket.component.css']
})
export class FavoriteTicketComponent implements OnInit {

  constructor(private ticketService:TicketService, private favoritesService:FavoritesService, private userService:UserService) { }

  
  @Input() ticket: Ticket = {} as Ticket; 
  favorites:Favorite[] = [];
  allUsers:User[] = [];

  ngOnInit(): void {
  }

  FavoriteTicket(form:NgForm):void{
    //check if first and last name are in all users.  if not, add to users and then either way add to favorites
    
    // this.userService.getAllUsers().subscribe((response:any) => this.allUsers=response);
    // let nuser:User = {userId:this.allUsers.length+1, firstName:form.form.value.FirstName, lastName:form.form.value.LastName}
    // if(this.allUsers.where(n=> n.firstname ==nuser.firstName && n.lastName == nuser.lastName) == false){
    //   this.userService.addNewUser(form.form.value.FirstName, form.form.value.LastName);
    // }
    this.favoritesService.addToFavorites(this.ticket.ticketId, form.form.value.FirstName, form.form.value.LastName).subscribe((response:any) => this.favorites.push(response));
    // window.location.reload()
  }
}
