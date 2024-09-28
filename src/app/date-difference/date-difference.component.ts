import { Component } from '@angular/core';
import { CustomDate } from '../../utils/custom-date';

@Component({
  selector: 'app-date-difference',
  templateUrl: './date-difference.component.html',
  styleUrls: ['./date-difference.component.css']
})
export class DateDifferenceComponent {
  day1!: number;
  month1!: number;
  year1!: number;
  day2!: number;
  month2!: number;
  year2!: number;
  result: string | null = null;

  calculateDifference() {
    const date1 = new CustomDate(this.year1, this.month1 - 1, this.day1);
    const date2 = new CustomDate(this.year2, this.month2 - 1, this.day2);

    if (!date1.isValidDate() || !date2.isValidDate())
    {
      console.log('invalid')
      this.result = 'Please input valid dates';
      return;
    }

    const { years, months, days } = date1.difference(date2) 

    // Prepare the result
    this.result = `The difference is ${years} year${years === 1 ? '' : 's'}, ${months} month${months === 1 ? '' : 's'} and ${days} day${days === 1 ? '' : 's'}.`;
  }

}
