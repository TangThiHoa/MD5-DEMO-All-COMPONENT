import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-bindding',
  templateUrl: './one-way-bindding.component.html',
  styleUrls: ['./one-way-bindding.component.css']
})
export class OneWayBinddingComponent implements OnInit {
  firstName= 'Sachin';
  lastName='Tendulkar';


  constructor() { }

  ngOnInit(): void {
  }

  title="Còn game nào khó hơn không ạ "

  //Example 1
  isDisabled= false;

}
