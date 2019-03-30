import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers: any;

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get("http://localhost:3000/user").toPromise()
  }
}
