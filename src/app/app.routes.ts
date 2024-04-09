import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

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
