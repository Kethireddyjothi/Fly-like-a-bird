import { Injectable } from '@angular/core';
import { Flights} from './flightDetails';
import { Subject } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
 arr:any;
subject = new Subject<Flight[]>()
  constructor() { }
  filterFlight(searchText,searchText1,searchText2)
  {
this.arr=Flights.filter(data=> data.from.toLowerCase()===searchText&&data.destination.toLowerCase()===searchText1);
console.log(this.arr)
  }
  getFlightPrice(){
    this.subject.next(this.arr);
  }
  getFlights(highValue,value){
    this.arr=this.arr.filter(data=> data.price>=value&&data.price<=highValue);
    this.subject.next(this.arr);
    console.log(this.arr);
    }
}
