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

        // To handle day overflow, we'll assume that the current year/month is irrelevant to the calculation
        let currentMonth = 0; // Start with January (0-indexed)
        let currentYear = 0; // Assume a baseline year for day calculations

        // Adjust for overflowing days
        while (totalDays >= CustomDate.daysInMonth(currentYear, currentMonth)) {
            totalDays -= CustomDate.daysInMonth(currentYear, currentMonth);
            totalMonths++;
            currentMonth++;

            // Handle month overflow (12 months = 1 year)
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
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
