import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
customers: Customer[] = [
  {customerNo: 1, name: 'Rahuld Dravid', address: 'Brunay', city: 'Bangalore', state: 'Karnataka', country: 'India'},
  {customerNo: 2, name: 'Sachin Tendulkar', address: 'Urugoay', city: 'Mumbai', state: 'Maharashtra', country: 'India'},
  {customerNo: 3, name: 'Saurrav Ganguly', address: 'heiw', city: 'Kolkata', state: 'West Bengal', country: 'India'},
  {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'hưqsha', city: 'Ranchi', state: 'Bihar', country: 'India'},
  {customerNo: 5, name: 'Virat Kohli', address: 'sjajs', city: 'Delhi', state: 'Delhi', country: 'India'},
]
}
