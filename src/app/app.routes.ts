import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClassicSearchComponent } from './components/classic-search/classic-search.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { EstateFormComponent } from './components/user/estate-form/estate-form.component';

export const routes: Routes = [
    {"path":"", component:HomeComponent},
    {"path":"classic-search", component:ClassicSearchComponent},
    {"path":"user", component:AdminComponent, children:[
        {"path":"dashboard", component:DashboardComponent},
        {"path":"estate-form", component:EstateFormComponent}
    ],canActivate:[authGuard]}
];
