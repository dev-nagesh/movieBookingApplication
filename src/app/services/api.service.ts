import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//   public moviesList=[
//     {id:1,name:'Movie1'},
//     {id:2,name:'Movie 2'},
//     {id:3,name:'Movie 3'},
// ] ;
public movieSeats=[
  {id:1,seats:[1,2,3,4,5]},
  {id:2,seats:[1,2,3,4,5]},
  {id:3,seats:[1,2,3,4,5]}
] ;
  constructor(private router:Router,private http:HttpClient) { }
  validateLogin(loginDetails){
    // if(localStorage.getItem('isLoggedin')){
    //   this.router.navigate(['/ticketBooking']);
    // }
    // else{
    //   localStorage.setItem('isLoggedin',JSON.stringify(loginDetails.username));
    //   this.router.navigate(['/ticketBooking']);
    // }
    return this.http.post<any>("http://localhost:3000/login", loginDetails);
    
  }
  getMovies(){
    //return this.moviesList;
    return this.http.get("http://localhost:3000/getMoviesList")
  }
  getMovieSeats(movieId){
    //return this.http.post(,{"movieId":movieId});
    return this.http.post<any>("http://localhost:3000/getSeatsList", {"movieId":movieId});
    
    // let seatsList=this.movieSeats.filter(movieEle=> movieEle.id==movieId);
    // return seatsList;
  }
  bookTicket(movieDetails){
    //return this.http.post(,{"movieId":movieId});
    return this.http.post<any>("http://localhost:3000/bookTicket", movieDetails);
    
    // let seatsList=this.movieSeats.filter(movieEle=> movieEle.id==movieId);
    // return seatsList;
  }
}
