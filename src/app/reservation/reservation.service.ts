import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    // return this.reservations;
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(updateReservation: Reservation, id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = updateReservation;
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
