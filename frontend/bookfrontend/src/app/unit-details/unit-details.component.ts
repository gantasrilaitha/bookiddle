import { Component, Input, OnInit } from '@angular/core';
import { SyllabusUnit } from '../models/unit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitService } from '../services/unit.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-unit-details',
  standalone: true,
  imports: [MatIconModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule],
  templateUrl:'./unit-details.component.html',
  styleUrl: './unit-details.component.scss'
})
export class UnitDetailsComponent{
  unitId !:number;
  unitForm !: FormGroup;
  unit!: SyllabusUnit;
  isEditable = {
    title: false,
    description: false,
    taught: false
  };

  constructor(
      private fb: FormBuilder,
      private unit_service:UnitService,
      private router: Router,
      private route: ActivatedRoute,
    ) {
      this.unitForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      title: [''],
      description: [''],
      taught: ['']
    });}

    ngOnInit() {
      this.unitId = this.route.snapshot.params['id'];
      this.unit_service.getUnitById(this.unitId).subscribe((unit: SyllabusUnit) => {
        this.unitForm.patchValue(unit);// Populate the form
      });
    }

    toggleEdit(field: 'title' | 'description' | 'taught') {
      this.isEditable[field] = !this.isEditable[field];
      const control = this.unitForm.get(field);
      if (control) {
        if (this.isEditable[field]) {
          control.enable();
        } else {
          control.disable();
        }
      }
    }

    onSave(): void {
      if (this.unitForm.valid) {
         const updatedUnit: SyllabusUnit = {
              ...this.unit, //keep the previous values
              ...this.unitForm.getRawValue() //overwrite with updated form values
          };
        this.unit_service.updateUnit(this.unitId,updatedUnit).subscribe({
          next: () => {
            this.router.navigate(['/all-units']); // Navigate back to the list
          },
          error: (error) => {
            console.error('Error updating unit:', error);
            // Handle error (e.g., display an error message)
          }
        });
      }
    }
}
