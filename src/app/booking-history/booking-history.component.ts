import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['/ticketBooking'])
    },2000)
  }

}