import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})


export class ReservationFormComponent {

  reservationForm: FormGroup = new FormGroup({});

  onSubmit() { }
}
