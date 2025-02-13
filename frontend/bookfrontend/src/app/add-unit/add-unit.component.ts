import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms'; // Import FormsModule
import { SyllabusUnit } from '../models/unit.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnitService } from '../services/unit.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-unit',
  standalone: true,
  imports: [FormsModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        CommonModule,
        MatFormFieldModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatSelectModule,
        
  ],
  templateUrl: './add-unit.component.html',
  styleUrl: './add-unit.component.scss'
})
export class AddUnitComponent{

  unitForm !: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private unit_service:UnitService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.unitForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      taught: [null, [Validators.required]]})
  }

  onSubmit() {
    if (this.unitForm.valid) {
      this.unit_service.create(this.unitForm.value).subscribe(
        (res) => {
          console.log("Creating unit",res);
          this.snackBar.open('Successfully added!', 'Close', { duration: 3000 });
          this.unitForm.reset();
          this.router.navigate(['']);
        },
        (error) => {
          console.log("Error while creating unit",error);
          this.snackBar.open('Error adding unit. Please try again.', 'Close', { duration: 3000 });
        }
      );
    }
  }
}
