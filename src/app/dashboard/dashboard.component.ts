import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user = [
    {
      name: "Vivo Y53",
      company: "Vivo",
      manufacturer: "China",
      price: "10,000",
      owner: "Mona"
    },
    {
      name: "Vivo Y53",
      company: "Vivo",
      manufacturer: "China",
      price: "10,000",
      owner: "Mona"
    }
  ]

  tableHeaders = ["Sno", "Name", "Company", "Manufacturer", "Price", "Owner"]
  constructor() { }
  ngOnInit() {
  }


}
