var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app=express();
app.use(bodyParser.json());
app.use(cors());
let moviesList=[
    {id:1,name:'Movie1'},
    {id:2,name:'Movie 2'},
    {id:3,name:'Movie 3'},
] ;
let movieSeats=[
    {id:1,seats:[1,2,3,4,5]},
    {id:2,seats:[1,2,3,4,5]},
    {id:3,seats:[1,2,3,4,5]}
  ] ;
  let ticketsBooked=[];
//app.use(bodyParser.urlencoded({extended:true}));
app.get("/getMoviesList",(req,resp)=>{
    resp.json(moviesList);
});
app.post("/getSeatsList",(req,resp)=>{
    let movieId = req.body.movieId;
    let seatsList=movieSeats.filter(movieEle=> movieEle.id==movieId);
    resp.json(seatsList);
})
app.post("/bookTicket",(req,resp)=>{
    let movieDetails=req.body
    ticketsBooked.push({id:movieDetails.movieName,seat:movieDetails.seat});
    let ind = movieSeats.findIndex(movieEle=>movieEle.id=movieDetails.movieName);
    if(ind!=-1){
        movieSeats[ind].seats=movieSeats[ind].seats.filter(id=>id!=movieDetails.seat)
    }
    resp.json({booking:true});
})
app.post("/login",(req,resp)=>{
    let loginDetails=req.body
    if(loginDetails.username='user1' && loginDetails.password=='user1'){ 
        resp.json({login:true});
    }
    else{
        resp.json({login:false});
    }
})
app.listen(3000,(err)=>{
    if(!err)
    {
        console.log("Hitting Port:",3000);
    }
})