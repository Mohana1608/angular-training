import { Component, OnInit, Input } from '@angular/core';
import { bindCallback } from 'rxjs';


@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {

  @Input() count = 0;
  @Input() title = ''; //input values
  @Input() iconClass = '';
  @Input() color = "black";
  constructor() { }

  ngOnInit() {
  }

  getStyle(){
    return{
    'font-size' : '50px',
    'color' : this.color
  }
}
}