import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CustomDate } from '../../utils/custom-date'; // Adjust the path based on where your class is
import { TimePeriod } from '../../utils/period';

@Component({
  selector: 'app-root',
  templateUrl: './date-difference.component.html',
  styleUrls: ['./date-difference.component.css']
})
export class DateDifferenceComponent {
  datePairs: any[] = [];
  totalDifference: any = null;

  constructor() {
    this.addDatePair(); // Initialize with one pair of dates
  }

  addDatePair() {
    this.datePairs.push({
      date1: { day: '', month: '', year: '' },
      date2: { day: '', month: '', year: '' },
      difference: null
    });
  }

  removeDatePair(index: number) {
    this.datePairs.splice(index, 1);
  }

  calculateDifference(i: number) {
    const date1 = this.datePairs[i].date1;
    const customDate1: CustomDate = new CustomDate(date1.day, date1.month - 1, date1.year);

    const date2 = this.datePairs[i].date2;
    const customDate2: CustomDate = new CustomDate(date2.day, date2.month - 1, date2.year);

    if (!customDate1.isValidDate() || !customDate2.isValidDate()) {
      this.datePairs[i].difference = 'Please input valid dates';
      return;
    }
        

    const differencePeriod = customDate1.difference(customDate2);
    this.datePairs[i].difference = differencePeriod
  }

  calculateTotalDifference() {
    this.datePairs.forEach((datePair, i) => {
      this.calculateDifference(i);
    })
    const timePeriods: TimePeriod[] = this.datePairs.map(x => x.difference);
    this.totalDifference = TimePeriod.addTimePeriods(timePeriods)
  }
}
