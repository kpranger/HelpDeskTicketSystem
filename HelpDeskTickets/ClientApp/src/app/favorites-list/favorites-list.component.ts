import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  constructor(private favoritesService:FavoritesService, private userService:UserService) { }

  favTickets:Ticket[] = [];
  firstName:string = '';
  lastName:string = '';
  allUsers:User[] = [];
  check:boolean = false;
  listening:User = {} as User;

  ngOnInit(): void {

  }
  
  showFavorites(form:NgForm){
    this.firstName  = form.form.value.FirstName;
    this.lastName = form.form.value.LastName;
    // this.userService.getAllUsers().subscribe((response:any) => this.allUsers=response);
    // // let nuser:User = {userId:this.allUsers.length+1, firstName:form.form.value.FirstName, lastName:form.form.value.LastName}
    // this.userService.checkUserExists(form.form.value.firstName, form.form.value.lastName).subscribe((response:any) => this.check=response);
    // if(this.check == false){
    //    this.userService.addNewUser(form.form.value.FirstName, form.form.value.LastName).subscribe((test:any) => this.listening = test);
    //    console.log(this.listening);
    // }
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
