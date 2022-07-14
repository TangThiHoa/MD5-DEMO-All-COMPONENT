import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  summation() {
    // @ts-ignore
    const num1 = +document.getElementById('input1').value;
    // @ts-ignore
    const num2 = +document.getElementById('input2').value;
    alert(num1 + num2);
  }
  subtraction() {
    // @ts-ignore
    const num1 = +document.getElementById('input1').value;
    // @ts-ignore
    const num2 = +document.getElementById('input2').value;
    alert(num1 - num2);
  }
  multiplication(){
    // @ts-ignore
    const num1 = +document.getElementById('input1').value;
    // @ts-ignore
    const num2 = +document.getElementById('input2').value;
    alert(num1 * num2);

  }
  division(){
    // @ts-ignore
    const num1 = +document.getElementById('input1').value;
    // @ts-ignore
    const num2 = +document.getElementById('input2').value;
    alert(num1 / num2);
  }



  ngOnInit(): void {
  }

}
