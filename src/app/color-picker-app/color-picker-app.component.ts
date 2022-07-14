import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-app',
  templateUrl: './color-picker-app.component.html',
  styleUrls: ['./color-picker-app.component.css']
})
export class ColorPickerAppComponent implements OnInit {
  background = '#00e067';
  constructor() { }

  ngOnInit(): void {
  }
  onChange(value: any){
    this.background = value;
  }

}
