import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-loginalert',
  templateUrl: './loginalert.component.html',
  styleUrls: ['./loginalert.component.css']
})
export class LoginalertComponent implements OnInit {
  @Input() success;
  @Input() message;
  constructor() { }

  ngOnInit() {
  }
  isValid() {
    return this.success;
  }
  isDefined() {
    return this.success !== undefined;
  }
}