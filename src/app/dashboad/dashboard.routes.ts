import { Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component'),
        children: [
            { path: 'products', component: ProductsComponent},
            { path: 'profile', component: ProfileComponent},
            { path: 'search', component: SearchComponent},
            { path: '**', redirectTo: 'products'}
        ]
    }
]

export default routes;