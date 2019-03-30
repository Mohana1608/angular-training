import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  users = []
  tableHeaders = ["S.No","First Name","Last Name","email","Phone","Designation","Status"]

  async ngOnInit() {
    const userList = await this.userService.getUsers()
  }
  

}
