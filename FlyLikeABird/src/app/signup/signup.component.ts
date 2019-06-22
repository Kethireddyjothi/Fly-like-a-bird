import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
fname = new FormControl('');
lname=new FormControl('');
email = new FormControl('', [Validators.required, Validators.email]);
pwd=new FormControl('');

  constructor(private router: Router) { }

  ngOnInit() {
  }
  getErrorMessage(value) {
    return value.hasError('required') ? 'You must enter a value' :
    value.hasError('email') ? 'Not a valid email' :
            '';}

  onSubmit(): void{
    // localStorage.setItem('email',this.email.value);
    // localStorage.setItem('pwd',this.pwd.value);

   this.router.navigate(['/login']);

  }
}
