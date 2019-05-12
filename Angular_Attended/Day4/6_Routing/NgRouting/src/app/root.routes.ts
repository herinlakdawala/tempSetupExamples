import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthorsRootComponent } from "./authors-module/components/authors-root/authors-root.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductNotSelectedComponent } from "./components/products/ns.component";
import { ProductDetailsComponent } from "./components/products/pd.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'authors', component: AuthorsRootComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', component: ProductNotSelectedComponent },
            { path: ':id', component: ProductDetailsComponent }
        ]
    },
    { path: 'lazy', loadChildren: './lazy-module/lazy.module#LazyModule' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
    { path: '**', component: NotFoundComponent }
];