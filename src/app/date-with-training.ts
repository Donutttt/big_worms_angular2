import { Component, Input } from '@angular/core';
import { TrainingDate } from './training-date.ts';

/**
* basically just a connection between a date and a TrainingDate
* @param {TrainingDate} trainingDate the TrainingDate object
* @param {Date} dateOfTraining the js Date object for this training
*/
@Component({
  selector: 'date-with-training',
  template: `
      <div>
        {{ dateString }}
      </div>
  `
})
export class DateWithTraining{
    trainingDate: TrainingDate;
    dateOfTraining: Date;
    dateString: String;

    constructor(trainingDate: TrainingDate, dateOfTraining: Date){
        this.trainingDate = trainingDate;
        this.dateOfTraining = dateOfTraining;
        this.dateString = this.getDateString();
    }

    getDateString(): string{
        let monthNames: [string] = [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return monthNames[this.dateOfTraining.getMonth()];
    }
}
