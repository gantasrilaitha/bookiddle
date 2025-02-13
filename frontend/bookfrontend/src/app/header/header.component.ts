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
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  
  templateUrl: './header.component.html',
  
  styleUrls: ['./header.component.scss'],
  imports:[MatButtonModule,]
  
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToNewUnit() {
    this.router.navigate(['/new-unit']);
  }
  navigateToAllUnits() {
    this.router.navigate(['/all-units']);
  }
}
