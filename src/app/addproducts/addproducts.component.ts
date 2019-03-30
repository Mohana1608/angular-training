import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  addProductsForm : FormGroup;
  submitted: Boolean = false;
  category: Array<string>=[
    "Watches",
    "Clothes",
    "Accessories",
  ]
  subCategory = {
    clothes: [
      "Formal",
      "Casual",
      "Smart Casual"
    ],
    watches: [
      "Digital",
      "Analog",
      "Fitbit"
    ],
    accessories: [
      "Headphones",
      "Mobile Covers",
      "Speakers"
    ]
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addProductsForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      price: ['', [Validators.required, Validators.min(500), Validators.max(10000)]],

      category: [
        // giving first value as default value
        this.category[0],
        [
          Validators.required
        ]
      ],
      subCategory: [
        this.subCategory.clothes[0],
        [
          Validators.required
        ]
      ],
      pImage:[],
      dimension:[],
      pCode:[],

    });
  }
  getSelectedCategory(){
    switch (this.addProductsForm.controls['category'].value){
          case 'Watches': return 'watches'
          case 'Clothes': return 'clothes'
          case 'Accessories': return 'accessories'
        }
      }
 
      get f() { return this.addProductsForm.controls; }
    }
    
