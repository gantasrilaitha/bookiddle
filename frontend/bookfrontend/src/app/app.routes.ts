import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsListComponent } from './units-list/units-list.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  
  { path: 'all-units', component: UnitsListComponent },
  { path: 'update-unit/:id', component: UnitDetailsComponent },
  { path: 'new-unit', component: AddUnitComponent },
  { path: '', component: HeaderComponent }
];
