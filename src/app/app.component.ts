import {Component, OnInit} from '@angular/core';
import { TrainingMonth } from './training-month';
import { TrainingDate } from './training-date';

import '../styles.css';


@Component({
    selector: 'my-app',
    template: `
      <div>
          <h1>App component works</h1>
          <p>{{ trainingMonths | json }}</p>
      </div>
    `
})

export class AppComponent implements OnInit {

    trainingMonths = {};

    //TODO: get this from a service instead, maybe use pastebin,
    //google docs or something
    trainingDates: [TrainingDate] = [
      new TrainingDate('Spiceball Park', 0, 16, 0),
      new TrainingDate('Warriner School Hall', 1, 18, 30)
    ];

    ngOnInit() {
        console.log('AppComponent initializing...');
    }

    constructor(){
        let today = new Date();
        let startOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        this.addTrainingMonth(startOfThisMonth);
        console.log('training months: ');
        console.dir(this.trainingMonths);
    }

    private addTrainingMonth(monthStart: Date): void{
        this.trainingMonths[this.getTrainingMonthKey(monthStart)] = new TrainingMonth(monthStart, this.trainingDates);
    }

    private getTrainingMonthKey(dateIn: Date): string{
        return dateIn.getMonth() + '~~' + dateIn.getFullYear();
    }
}
