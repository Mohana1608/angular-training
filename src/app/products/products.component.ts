import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = []
  constructor(private productService: ProductServiceService,
    private router: Router
  ) { }

 async  ngOnInit() {
   const products = await this.productService.getProducts()
  //  console.log(products);
  this.products = products ['products'];
  }
navigateToAddProducts()
{
  this.router.navigate(["products/add"])
}

}
