import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsdesComponent } from './productsdes/productsdes.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { LoginComponent } from './login/login.component';
import {ExampleComponent} from './example/example.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UsersviewComponent } from './usersview/usersview.component';
import {UsertableComponent} from './usertable/usertable.component';
import {StacksComponent} from './stacks/stacks.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path : 'example',
        component: ExampleComponent
    },
    {
        path:'usertable',
        component: UsertableComponent
    },
    {
         path: 'dashboard',
         component: DashboardComponent
    },
    {
        path:'stacks',
        component: StacksComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'productsdes',
        component: ProductsdesComponent
    },
    {
        path: 'products/add',
        component: AddproductsComponent
    },
    {
        path:'usersview',
        component: UsersviewComponent
    }
    
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }