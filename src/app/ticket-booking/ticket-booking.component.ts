import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  public moviesList=[];
  public seatsList=[];
  bookingForm:FormGroup
  constructor(private apiService:ApiService, private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.bookingForm=this.fb.group({
      movieName:['',[Validators.required]],
      seat:['',[Validators.required]]
    })
    this.getMoviesList();
    this.bookingForm.get('movieName').valueChanges.subscribe(value=>{
      console.log(value);
      this.getSeats(value);
    })
  }
  getMoviesList(){
    this.apiService.getMovies().subscribe((response:any)=>{
      this.moviesList=response;
  });
  }
  getSeats(id){
    this.apiService.getMovieSeats(id).subscribe(response=>{
      this.seatsList=response[0]['seats'];
    });
    
  }
  bookTicket(){
    console.log(this.bookingForm.value);
    this.apiService.bookTicket(this.bookingForm.value).subscribe(response=>{
      //alert(response);
      this.router.navigate(['/bookingHistory']);
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
