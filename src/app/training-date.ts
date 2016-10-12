/**
* holds a date to be used for trainings
* @param {string} location A string for the location of the training
* @param {number} day of training a value (0-6) 0 is Sunday
* @param {number} hour time of training (hours) a number representing hours 0-23
* @param {minute} minute time of training (minutes) a number representing minutes 0-59
*/
export class TrainingDate {
    location: string;
    day: number;
    hour: number;
    minute: number;

    constructor(location: string,
                day: number,
                hour: number,
                minute: number){

      this.location = location;
      this.day = day;
      this.hour = hour;
      this.minute = minute;
    }
};
