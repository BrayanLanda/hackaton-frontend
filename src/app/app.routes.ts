import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';


export const routes: Routes = [
    {path:"", component: MainComponent},
    {path:"register", component: RegisterComponent},
    {path:"login", component: LoginComponent},
    {path: "products", component: ProductsComponent}
];

