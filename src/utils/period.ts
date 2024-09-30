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

    // Format the date as a string
    toString(): string {
        return `${this.years} year${this.years === 1 ? '' : 's'}, ${this.months} month${this.months === 1 ? '' : 's'} and ${this.days} day${this.days === 1 ? '' : 's'}`;
    }
}
