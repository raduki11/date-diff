import { CustomDate } from "./custom-date";

export class TimePeriod {
    years: number;
    months: number;
    days: number;

    constructor(years: number, months: number, days: number) {
        this.years = years;
        this.months = months;
        this.days = days;
    }

    getYears() {
        return this.years;
    }

    getMonths() {
        return this.months;
    }

    getDays() {
        return this.days;
    }

    static addTimePeriods(periods: TimePeriod[]): TimePeriod {
        let totalYears = 0;
        let totalMonths = 0;
        let totalDays = 0;

        // Sum all the time periods
        periods.forEach(period => {
            totalYears += period.getYears();
            totalMonths += period.getMonths();
            totalDays += period.getDays();
        });

        // Adjust for overflowing days
        while (totalDays >= 30) {
            totalDays -= 30;
            totalMonths++;
        }

        // Adjust for overflowing months (12 months = 1 year)
        totalYears += Math.floor(totalMonths / 12);
        totalMonths = totalMonths % 12;

        return new TimePeriod(totalYears, totalMonths, totalDays);
    }

    // Format the date as a string
    toString(): string {
        return `${this.years} year${this.years === 1 ? '' : 's'}, ${this.months} month${this.months === 1 ? '' : 's'} and ${this.days} day${this.days === 1 ? '' : 's'}`;
    }
}
