import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Flight } from '../flight';
import { Options } from 'ng5-slider';

import { FlightServiceService } from '../flight-service.service';
import { Flights } from '../flightDetails';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
 styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() flightlist: Flight[];
  value: number = 1000;
  highValue:number=10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  constructor(private filgshtService: FlightServiceService, private router: Router) { }
  displayedColumns: string[] = ['name', 'departureTime', 'arrivalTime','from', 'destination', 'price' ];
  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
   this.filgshtService.subject.subscribe(d =>{ this.flightlist = d;
    
    this.dataSource = new MatTableDataSource(this.flightlist);
    this.dataSource.sort = this.sort;
  });
  this.filgshtService.getFlightPrice();
  }
  getDetails(){
    this.filgshtService.getFlights(this.highValue,this.value);
  }
 booking(): void {
  this.router.navigate( ['/booking'] );
}
}
