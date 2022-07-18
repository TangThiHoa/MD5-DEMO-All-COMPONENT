import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-app',
  templateUrl: './countdown-timer-app.component.html',
  styleUrls: ['./countdown-timer-app.component.css']
})
export class CountdownTimerAppComponent implements OnInit {
  timeStart:number = 10;
  interval: any;
  temp: any;
  message: string = "Bắt đầu";


  constructor() {
  }

  ngOnInit(): void {
    this.temp = this.timeStart;
  }

  start() {
    if (this.timeStart > 0) {
      this.interval = setInterval(() => {
        this.timeStart = +this.timeStart - 1;
        if (this.timeStart == 0) {
          clearInterval(this.interval);
          this.message = 'Về mo rồi nhé'
        }
      }, 400);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.message = "Dừng lại"
  }

  reset() {
    this.timeStart = this.temp;
    this.message = "Bắt đầu lại nhé "
  }

}
