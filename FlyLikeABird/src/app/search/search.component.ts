import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FlightServiceService } from '../flight-service.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit{
  constructor( private router: Router,private filgshtService:FlightServiceService) { }
  searchText:string="";
  searchText1:string="";
  searchText2:string="";
  temp:string="";
  i=0;

  getFlights(){
    this.filgshtService.filterFlight(this.searchText,this.searchText1,this.searchText2);
    this.router.navigate(["/filter"])
    console.log(this.searchText)
  }
  ngOnInit() {
    // this.filgshtService.getFlights();
    }
    swap():void{
     this.temp=this.searchText;
     this.searchText=this.searchText1;
     this.searchText1=this.temp;

    }
   
 count(value,i):void{
       if(value === "+"){
    i<6?i+=1:i;
       }else{
        i>0?i-=1:i;
       }
       
   }

   
}
