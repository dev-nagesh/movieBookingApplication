import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  bookingHistioryList=[];
  constructor(private router:Router,private apiService:ApiService) { }

  ngOnInit() {
    setTimeout(()=>{
      //this.router.navigate(['/ticketBooking'])
    },2000)
    this.getBookingHistory();
  }
  getBookingHistory(){
    this.apiService.getBookingHistory().subscribe((response:any)=>{
      this.bookingHistioryList=response;
    })
  }
  goToBooking(){
    this.router.navigate(['/ticketBooking'])
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
