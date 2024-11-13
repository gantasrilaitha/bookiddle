import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsListComponent } from './units-list/units-list.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { AddUnitComponent } from './add-unit/add-unit.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'units', pathMatch: 'full' },
  { path: 'units', component: UnitsListComponent },
  { path: 'units/:id', component: UnitDetailsComponent },
  { path: 'add', component: AddUnitComponent }
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/