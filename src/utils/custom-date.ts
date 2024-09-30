import { TimePeriod } from "./period";

export class CustomDate {
    year: number;
    month: number; // 0-indexed (0 for January, 1 for February, ..., 11 for December)
    day: number;

    constructor(day: number, month: number, year: number,) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    getFullYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDate() {
        return this.day;
    }

    // Check if the date is valid considering leap years and month lengths
    isValidDate(): boolean {

        // Validate month and day
        if (this.month < 0 || this.month > 11 || this.day < 1 || this.day > CustomDate.daysInMonth(this.year, this.month)) {
            return false;
        }

        return true;
    }

    // Check if a year is a leap year
    isInLeapYear(): boolean {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    static isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Calculate the difference between two CustomDate objects in years, months, and days
    difference(date2: CustomDate): TimePeriod {
        let laterDate = new CustomDate(this.day, this.month, this.year);
        let earlierDate = date2;

        if (date2.getFullYear() > this.getFullYear()) {
          laterDate = date2;
          earlierDate = this;
        }
        else if (date2.getFullYear() == this.getFullYear() && date2.getMonth() > this.getMonth()){
          laterDate = date2;
          earlierDate = this;
        }
        else if (date2.getMonth() == this.getMonth() && date2.getDate() > this.getDate()){
          laterDate = date2;
          earlierDate = this;
        }
    
        let years = laterDate.getFullYear() - earlierDate.getFullYear();
        let months = laterDate.getMonth() - earlierDate.getMonth();
        let days = laterDate.getDate() - earlierDate.getDate();
    
        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12; // Adjust months
        }
    
        // Adjust for negative days
        if (days < 0) {
            months--;
            const prevMonth = new Date(earlierDate.getFullYear(), earlierDate.getMonth() + 1, 0);
            days += prevMonth.getDate(); // Add days from the previous month
        }
        
        if (months < 0) {
            years--;
            months += 12; // Adjust months
        }

        return new TimePeriod(years, months, days);
    }

    // Get the number of days in a given month of a year
    static daysInMonth(year: number, month: number): number {
        const daysInMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === 1 && CustomDate.isLeapYear(year)) {
            return 29;
        }
        return daysInMonth[month];
    }

    // Format the date as a string
    toString(): string {
        const formattedMonth = (this.month + 1).toString().padStart(2, '0');
        const formattedDay = this.day.toString().padStart(2, '0');
        return `${this.year}-${formattedMonth}-${formattedDay}`;
    }
}
