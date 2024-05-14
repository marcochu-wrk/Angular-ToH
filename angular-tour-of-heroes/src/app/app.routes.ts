import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
    {path: '', component: DashboardComponent},
    {path: 'heroes', 
    component: HeroesComponent}
];
export class AppRoutingModule{ }