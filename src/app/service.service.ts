import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient ) { }
  private url ='http://localhost:3000/'; 

  user : any [] = [] ; 
  creatCompte (user : any ){
   return this.http.post (this.url + 'user/creat' , user); 

  }
}
