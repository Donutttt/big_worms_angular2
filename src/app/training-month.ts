import { TrainingDate }  from './training-date';
import { DateWithTraining } from './date-with-training';
import { Component } from '@angular/core';

/**
* holds a set of js dates for the month specified, at the times specified
* @param {date} startOfMonth the date object for the first date of the month
* @param {array} trainingDates the TrainingDate objects to be used for the month
*/
//TODO: fix this properly
@Component({
  selector: 'date-with-training',
  template: `
      <div>
          <p>This is a date with training</p>
      </div>
  `
})
export class TrainingMonth {

    dates: [Date];
    startOfMonth: Date;
    trainingDates: [TrainingDate];
    datesWithTrainings: DateWithTraining[] = [];

    constructor(startOfMonth: Date, trainingDates: [TrainingDate]){
        this.startOfMonth = startOfMonth;
        this.trainingDates = trainingDates;
        this.initDates();
    }

    initDates(): void{
        let startMonth: number = this.startOfMonth.getMonth();
        let currDate: Date = this.startOfMonth;

        //just to ensure no infinite loops
        let iterCount: number = 0;
        let maxIter: number = 100;

        while (currDate.getMonth() === startMonth && iterCount < maxIter){
            console.dir(this.datesWithTrainings);
            this.datesWithTrainings = this.datesWithTrainings.concat(this.getTrainingsForDate(currDate, this.trainingDates));

            iterCount++;
            currDate.setDate(currDate.getDate() + 1);
        }
    }

    /**
     * gets the datesWithTrainings for the specified dates, for the
     * training dates specified
     * @param  {Date}           dateIn        the date to find trainings for
     * @param  {[TrainingDate]} trainingDates the array of TrainingDates
     * @return {[DateWithTraining]}           the array of datesWithTrainings for the date provided
     */
    private getTrainingsForDate(dateIn: Date, trainingDates: [TrainingDate]): DateWithTraining[]{
        let returnArray: any[] = [];
        let trnDates = trainingDates || this.trainingDates;

        for (let i = 0; i < trnDates.length; i++){
            let tDate = trnDates[i];

            if (dateIn.getDay() === tDate.day){
                returnArray.push(new DateWithTraining(tDate, new Date(dateIn)));
            }

        }

        return returnArray;
    }

}
