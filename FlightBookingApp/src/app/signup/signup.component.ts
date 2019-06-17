import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:string="registration done successfull"

  constructor() { }

  ngOnInit() {
  }

  register():string{
    return this.message;

  }
}
