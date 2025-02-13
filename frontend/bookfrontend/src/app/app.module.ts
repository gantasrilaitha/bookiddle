import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { routes} from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AddUnitComponent } from './add-unit/add-unit.component';

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AddUnitComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClient,
    
    BrowserAnimationsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }