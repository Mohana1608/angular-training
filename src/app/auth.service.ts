import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}


  async login(username:string , password:string){
    try {
      const login={
      username: username,
      password: password
    }
  
     const token = await this.http.post("http://localhost3000/auth/login",login).toPromise()
    return true
  }
  catch(err){
    return false;
  }

}
}
