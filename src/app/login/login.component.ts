import { Component } from '@angular/core';
import { Router } from '@angular/router'; // importing from angular/router library
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  [x: string]: any;
  username: string ="";
  password: string="";
  success:boolean;
  text;

  constructor(
    private router: Router, authService: AuthService // Router is imported and we are giving it to router variable
  ) { }

  async login() {
    const isValid:Boolean = await this.authService.login(this.username,this.password)

    if(isValid)
    {
     this.text = "Successful Login"
     this.router.navigate(["users"])
    }
    else{
      this.success = false;
      this.text = "Invalid Credentials"
    }
  }
  ngOnInit(){
    this.nav.hide();
  }
}
   
    // if ((this.username ==="admin") && (this.password ==="admin@123")) {
    //   this.success = true;
    //   this.text = "Successful Login";
    //   this.router.navigate(['example']) // on successful login, it redirects to dashboard
    // }
    // else {
    //   this.success = false;
    //   this.text = "Invalid Credentials";
    // }
  //  this.router.navigate(['example'])
   
