import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdesComponent } from './productsdes.component';

describe('ProductsdesComponent', () => {
  let component: ProductsdesComponent;
  let fixture: ComponentFixture<ProductsdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
