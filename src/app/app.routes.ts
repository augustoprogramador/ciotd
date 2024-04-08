import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '', 
        component: LoginComponent,
    },
    {
        path: 'login', 
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
