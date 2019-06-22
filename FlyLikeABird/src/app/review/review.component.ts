import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  value: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };

  constructor() { }

  ngOnInit() {
  }

}
