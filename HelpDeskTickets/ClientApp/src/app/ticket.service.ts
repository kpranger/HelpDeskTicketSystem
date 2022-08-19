import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http:HttpClient) { }
  controllerEndpoint:string = "api/Ticket";

  getAllTickets():any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetAllTickets`);
  }

  getTicketById(id:number):any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetTicketById/${id}`);
  }

  getByStatus(status:string):any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetByStatus/${status}`);
  }

  getByCategory(category:string):any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetByCategory/${category}`);
  }


  updateTicket(id:number, resolvedUserId: number, resolutionDetails: string):any{
    return this.http.patch(`${this.baseUrl}${this.controllerEndpoint}/UpdateTicket/${id}?resolvedUserId=${resolvedUserId}&resolutionDetails=${resolutionDetails}`, {});
  }

  // addTicket(title:string, details: string, status: string, submittedUserId: number, submittedDate: Date, favoritedUserId: number, resolvedUserId: number, resolutionDetails:string, resolvedDate:Date):any{
  //   return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/AddTicket/?title=${title}&details=${details}&status=${status}&submittedUserId=${submittedUserId}&submittedDate=${submittedDate}&favoritedUserId=${favoritedUserId}&resolvedUserId=${resolvedUserId}&resolutionDetails=${resolutionDetails}&resolvedDate=${resolvedDate}`, {});
  // }
  // addTicket(newTicket:Ticket):any{
  //   return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/AddTicket/?title=${newTicket.title}&details=${newTicket.details}&status=${newTicket.status}&submittedUserId=${newTicket.submittedUserId}&submittedDate=${newTicket.submittedDate}&favoritedUserId=${newTicket.favoritedUserId}&resolvedUserId=${newTicket.resolvedUserId}&resolutionDetails=${newTicket.resolutionDetails}&resolvedDate=${newTicket.resolvedDate}`, {});
  // }

  addTicket(newTicket:Ticket):any{
    return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/AddTicket/?title=${newTicket.title}&details=${newTicket.details}&status=${newTicket.status}&submittedUserId=${newTicket.submittedUserId}&category=${newTicket.category}`, {});
  }


  deleteTicket(id:number):any{
    return this.http.delete(`${this.baseUrl}${this.controllerEndpoint}/DeleteTicket/${id}`);
  }

  getAllUsers():any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetAllUsers`);
  }
}
