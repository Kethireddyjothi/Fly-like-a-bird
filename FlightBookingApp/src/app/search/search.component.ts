import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit{
  searchText:string="";
  departure:string="";
  arrival:string="";
   i=0;
  
    constructor( private router: Router) { }
    ngOnInit() {
    }
 count(value):void{
       if(value === "+"){
    this.i<6?this.i+=1:this.i;
       }else if(value==="*"){
         this.i<6?this.i+=1:this.i;
       }else if(value==="/"){
         this.i<6?this.i+=1:this.i;
       }else if(value==="@"){
         this.i<6?this.i+=1:this.i;
       }else{
        this.i>0?this.i-=1:this.i;
       }
       
   }

   filter():void{
      this.router.navigate(["/filter"])
   }
}
