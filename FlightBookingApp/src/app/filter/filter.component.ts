import { Component, OnInit,Input } from '@angular/core';
import { Flights} from './../flightDetails';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
 styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() public searchText:any;
  @Input() public departure:any;
  @Input() public arrival:any;
  flights=Flights;
constructor() { }
  ngOnInit() {
    console.log(this.searchText);
 }
}
