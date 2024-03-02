import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClassicSearchComponent } from './components/classic-search/classic-search.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';

export const routes: Routes = [
    {"path":"", component:HomeComponent},
    {"path":"classic-search", component:ClassicSearchComponent},
    {"path":"user", children:[
        {"path":"dashboard", component:DashboardComponent}
    ],canActivate:[authGuard]}
];
