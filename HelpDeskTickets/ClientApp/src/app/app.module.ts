import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { UserComponent } from './user/user.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { FavoriteTicketComponent } from './favorite-ticket/favorite-ticket.component';
import { ResolvedTicketComponent } from './resolved-ticket/resolved-ticket.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TicketListComponent,
    TicketDetailsComponent,
    UserComponent,
    ResolvedTicketComponent,
    AddTicketComponent,
    FavoriteTicketComponent,
    FavoritesListComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'TicketList', component: TicketListComponent},
      {path: 'TicketDetails/:id', component: TicketDetailsComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
