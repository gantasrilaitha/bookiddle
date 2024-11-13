import { Component, inject, NgModule, OnInit } from '@angular/core';
import { SyllabusUnit } from '../models/unit.model';
//import { UnitService } from '../services/unit.service';
import { FormsModule, NgModel } from '@angular/forms';
import { UnitDetailsComponent } from '../unit-details/unit-details.component';
import { UnitService } from '../services/unit.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-units-list',
  standalone: true,
  imports:[UnitDetailsComponent,FormsModule],
  templateUrl:'./units-list.component.html' ,
  styleUrl: './units-list.component.scss'
})

export class  UnitsListComponent{
  units?: SyllabusUnit[];
  currentUnit: SyllabusUnit = {};
  currentIndex = -1;
  title = '';
  constructor(private unitService: UnitService) {

  }
  retrieveUnits(): void {
    this.unitService.getAll().subscribe({
      next: (data) => {
        this.units = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUnits();
    this.currentUnit = {};
    this.currentIndex = -1;
  }

  setActiveUnit(unit: SyllabusUnit, index: number): void {
    this.currentUnit = unit;
    this.currentIndex = index;
  }

  removeAllUnits(): void {
    this.unitService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentUnit = {};
    this.currentIndex = -1;

    this.unitService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.units = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
/*
export class UnitsListComponent implements OnInit {
  units?: SyllabusUnit[];
  currentUnit: SyllabusUnit = {};
  currentIndex = -1;
  title = '';

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.retrieveUnits();
  }

  retrieveUnits(): void {
    this.unitService.getAll().subscribe({
      next: (data) => {
        this.units = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUnits();
    this.currentUnit = {};
    this.currentIndex = -1;
  }

  setActiveUnit(unit: SyllabusUnit, index: number): void {
    this.currentUnit = unit;
    this.currentIndex = index;
  }

  removeAllUnits(): void {
    this.unitService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentUnit = {};
    this.currentIndex = -1;

    this.unitService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.units = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
*/