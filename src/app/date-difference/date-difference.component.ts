import { Component } from '@angular/core';

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
    const date1 = new Date(this.year1, this.month1 - 1, this.day1); // Month is 0-indexed
    const date2 = new Date(this.year2, this.month2 - 1, this.day2);

    // Calculate the difference in milliseconds
    const differenceInTime = date2.getTime() - date1.getTime();

    // Calculate the difference in days
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
    // Calculate years and remaining days
    const years = Math.floor(differenceInDays / 365);
    const remainingDays = differenceInDays % 365;

    // Prepare the result
    this.result = `The difference is ${years} year${years === 1 ? '' : 's'} and ${remainingDays} day${remainingDays === 1 ? '' : 's'}.`;
  }
}
