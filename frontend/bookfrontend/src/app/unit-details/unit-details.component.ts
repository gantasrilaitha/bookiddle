import { Component, Input, OnInit } from '@angular/core';
import { SyllabusUnit } from '../models/unit.model';

//import { UnitService } from '../services/unit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unit-details',
  standalone: true,
  imports: [],
  templateUrl:'./unit-details.component.html',
  styleUrl: './unit-details.component.scss'
})
export class UnitDetailsComponent{}
/*
export class UnitDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentSyllabusUnit: SyllabusUnit = {
    title: '',
    description: '',
    taught: false
  };

  message = '';

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSyllabusUnit(this.route.snapshot.params['id']);
    }
  }

  getSyllabusUnit(id: string): void {
    this.unitService.get(id).subscribe({
      next: (data) => {
        this.currentSyllabusUnit = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateTaught(status: boolean): void {
    const data = {
      title: this.currentSyllabusUnit.title,
      description: this.currentSyllabusUnit.description,
      taught: status
    };

    this.message = '';

    this.unitService.update(this.currentSyllabusUnit.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentSyllabusUnit.taught = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateSyllabusUnit(): void {
    this.message = '';

    this.unitService
      .update(this.currentSyllabusUnit.id, this.currentSyllabusUnit)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.unitService.delete(this.currentSyllabusUnit.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/units']);
      },
      error: (e) => console.error(e)
    });
  }
}
*/