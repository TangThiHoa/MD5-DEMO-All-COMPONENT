import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent implements OnInit {
  a = 0;
  b = 0;
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  summation1(a : any, b : any){

    this.result = a + b ;
  }

  subtraction1(a : any , b : any){
    this.result = a - b ;
  }

  multiplication1(a : any , b : any){
    this.result = a * b ;
  }

  division1(a : any , b : any){
    this.result = a / b ;
  }

}
