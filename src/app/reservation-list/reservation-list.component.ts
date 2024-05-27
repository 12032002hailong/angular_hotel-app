import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) {}
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
