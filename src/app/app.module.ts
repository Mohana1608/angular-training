import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductsdesComponent } from './productsdes/productsdes.component';
import { StacksComponent } from './stacks/stacks.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginalertComponent } from './loginalert/loginalert.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersviewComponent } from './usersview/usersview.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { UsertableComponent } from './usertable/usertable.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import{UserService} from './user.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ProductsComponent,
    AddproductsComponent,
    ProductsdesComponent,
    StacksComponent,
    LoginComponent,
    LoginalertComponent,
    SidebarComponent,
    DashboardComponent,
    UsersviewComponent,
    UsertableComponent,
    AnalyticsComponent,
    UsersComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
