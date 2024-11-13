import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink,RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterModule],  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 17 Crud example';
}