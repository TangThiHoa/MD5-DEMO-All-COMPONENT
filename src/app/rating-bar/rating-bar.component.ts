import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {IRatingUnit} from "../rating-bar";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  //Khai báo biến , nhận giá trị từ màn hình chính đưa về màn hình chính
  @Input()
  max = 10;
  @Input()
  ratingValue = 6;
  @Input()
  showRatingValue = true;
  @Output()
  rateChange = new EventEmitter<number>();
  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  ngOnChange(changes: SimpleChange) {
    if ('max' in changes) {

      // @ts-ignore
      let max = changes.max.curreentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  // @ts-ignore
  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingUnits);
  }

  // @ts-ignore
  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  // @ts-ignore
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
