import { Component, OnInit, Input } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-productsdes',
  templateUrl: './productsdes.component.html',
  styleUrls: ['./productsdes.component.css']
})
export class ProductsdesComponent implements OnInit {
@Input() color;
@Input() desc;
@Input() image;
@Input() code;
@Input() price;

constructor() { }

  ngOnInit() {
  }

}
