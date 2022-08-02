import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'ticketBooking',
    component: TicketBookingComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'bookingHistory',
    component: BookingHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
