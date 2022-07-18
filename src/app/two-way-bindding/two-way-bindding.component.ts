import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindding',
  templateUrl: './two-way-bindding.component.html',
  styleUrls: ['./two-way-bindding.component.css']
})
export class TwoWayBinddingComponent implements OnInit {
  value="";

  constructor() { }

  ngOnInit(): void {
  }

  clearValue() {
    this.value="";

  }
}
