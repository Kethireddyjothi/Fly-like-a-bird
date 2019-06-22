import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBookingApp';
  constructor(private router:Router) { }
  getAboutUs():void{
    this.router.navigate(['/about']);
  }
}
