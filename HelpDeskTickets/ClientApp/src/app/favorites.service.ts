import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http:HttpClient) { }
  controllerEndpoint:string = "api/Favorite";
  
  addToFavorites(id:number, firstName: string, lastName:string):any{    
    return this.http.patch(`${this.baseUrl}${this.controllerEndpoint}/AddToFavorites/${id}?firstName=${firstName}&lastName=${lastName}`, {});  }

  getFavorites(firstName:string, lastName:string):any{   
     return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/GetAllFavorites/?firstName=${firstName}&lastName=${lastName}`);  }
}
