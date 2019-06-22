import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private router: Router) {}
username=new FormControl('');
password=new FormControl('');
loginDeatils=[{name:"sree",pwd:"123"}]

  ngOnInit() {
  }
  getErrorMessage(value) {
    return value.hasError('required') ? 'You must enter a value' :
    value.hasError('email') ? 'Not a valid email' :
            '';}
  login() : void {
    console.log(this.username.value,this.password.value,this.username.value == this.loginDeatils[0].name,this.password.value == this.loginDeatils[0].pwd);
    if(this.username.value == this.loginDeatils[0].name && this.password.value == this.loginDeatils[0].pwd){
        this.router.navigate(['search']);
    }else {
      alert("Invalid credentials");
    }
    
  }
}

