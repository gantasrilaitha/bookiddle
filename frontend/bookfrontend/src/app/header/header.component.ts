import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone:true,
  
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.scss'],
  imports:[]
  
})
export class HeaderComponent {
  // Define categories
  //categories = ['Electronics', 'Fashion', 'Books', 'Furniture', 'Toys'];
  //appearance = inject(InputsAppearanceService).appearance;
}
