import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private router: Router) {}
username: string;
password: string;
loginDeatils=[{name:"sree",pwd:"123"}]

  ngOnInit() {
  }
  login() : void {
    
    if(this.username === this.loginDeatils[0].name && this.password === this.loginDeatils[0].pwd){
   
     //alert("login successfully done");
     this.router.navigate(['search']);
    }else {
      alert("Invalid credentials");
    }
  }
}

