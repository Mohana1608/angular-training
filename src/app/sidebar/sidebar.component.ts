import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  [x: string]: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  dashboard() {
    this.router.navigate(["home"])
  }
  users() {
    this.router.navigate(["example"])
  }
  products() {
    this.router.navigate(["products"])
  }
  addProducts() {
    this.router.navigate(["products/add"])
  }
}