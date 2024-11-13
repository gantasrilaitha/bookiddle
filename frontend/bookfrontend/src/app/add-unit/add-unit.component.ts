import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SyllabusUnit } from '../models/unit.model';
//import { UnitService } from '../services/unit.service';
@Component({
  selector: 'app-add-unit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-unit.component.html',
  styleUrl: './add-unit.component.scss'
})
export class AddUnitComponent{}
/*
export class AddUnitComponent implements OnInit {
  unit = { title: '', description: '' };
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveUnit(): void {
    // Save unit logic
    this.submitted = true;
  }

  newUnit(): void {
    this.unit = { title: '', description: '' };
    this.submitted = false;
  }
  */
/*
export class AddUnitComponent implements OnInit{
  unit: SyllabusUnit = {
    title: '',
    description: '',
    taught: false
  };
  submitted = false;

  constructor(private unitService: UnitService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveUnit(): void {
    const data = {
      title: this.unit.title,
      description: this.unit.description
    };

    this.unitService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newUnit(): void {
    this.submitted = false;
    this.unit = {
      title: '',
      description: '',
      taught: false
    };
  }

}
*/
