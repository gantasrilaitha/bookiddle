import { Component, inject, NgModule, OnInit } from '@angular/core';
import { SyllabusUnit } from '../models/unit.model';
//import { UnitService } from '../services/unit.service';
import { FormsModule, NgModel } from '@angular/forms';
import { UnitDetailsComponent } from '../unit-details/unit-details.component';
import { UnitService } from '../services/unit.service';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-units-list',
  standalone: true,
  imports:[MatFormFieldModule, MatInputModule, MatTableModule,MatDividerModule, MatIconModule,MatButtonModule],
  templateUrl:'./units-list.component.html' ,
  styleUrl: './units-list.component.scss'
})

export class  UnitsListComponent{
  displayedColumns: string[] = ['id', 'title', 'description', 'taught','action'];
  units ?: SyllabusUnit[];
  dataSource!: MatTableDataSource<SyllabusUnit>;

  constructor(private unitService: UnitService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.unitService.getAllUnits().subscribe(
      (data:SyllabusUnit[]) => {
        this.units = data;
        this.dataSource = new MatTableDataSource(this.units);
        console.log(data);
      }
    );
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToUpdateUnits(unit:SyllabusUnit ) {
    this.router.navigate(['/update-unit',unit.id]);
  }

  DeleteUnit(id: number): void {
    this.unitService.deleteUnitById(id).subscribe(
      (response) => {
        this.ngOnInit();
        this.router.navigate(['/all-units']); // Navigate back to the list
      },
      (error) => {
        console.error('Error deleting unit:', error);
        // Handle error (e.g., display an error message)
      }
  )
  }

}
