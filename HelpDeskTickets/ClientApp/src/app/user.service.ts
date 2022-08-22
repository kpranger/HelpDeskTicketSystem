import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http:HttpClient) { }
  controllerEndpoint:string = "api/Ticket";

  addNewUser(firstName:string, lastName:string):any{
    return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/AddNewUser?firstName=${firstName}&lastName=${lastName}`, {});
  }

  getAllUsers():any{
    return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/GetAllUsers`, {});
  }

  checkUserExists(firstName:string, lastName:string):any{
    return this.http.post(`${this.baseUrl}${this.controllerEndpoint}/CheckUserExists?firstName=${firstName}&lastName=${lastName}`, {});
  }
}
