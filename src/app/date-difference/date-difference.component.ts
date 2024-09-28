import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CustomDate } from '../../utils/custom-date'; // Adjust the path based on where your class is

@Component({
  selector: 'app-root',
  templateUrl: './date-difference.component.html',
  styleUrls: ['./date-difference.component.css']
})
export class DateDifferenceComponent {
  dateForm: FormGroup;
  totalYears: number = 0;
  totalMonths: number = 0;
  totalDays: number = 0;
  differences: { years: number; months: number; days: number }[] = [];

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      datePairs: this.fb.array([this.createDatePair()])
    });
  }

  // Get the FormArray containing the date pairs
  get datePairs(): FormArray {
    return this.dateForm.get('datePairs') as FormArray;
  }

  // Create a form group for a single date pair
  createDatePair(): FormGroup {
    return this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  // Add a new date pair
  addDatePair() {
    this.datePairs.push(this.createDatePair());
  }

  // Calculate differences for all pairs
  calculateDifferences() {
    this.totalYears = 0;
    this.totalMonths = 0;
    this.totalDays = 0;
    this.differences = [];

    this.datePairs.controls.forEach(pair => {
      console.log(pair)
      const startDate = new Date(pair.value.startDate);
      const endDate = new Date(pair.value.endDate);

      console.log(startDate);

      const startCustomDate = new CustomDate(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const endCustomDate = new CustomDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      if (startCustomDate.isValidDate() && endCustomDate.isValidDate()) {

        const startCustomDate = new CustomDate(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const endCustomDate = new CustomDate(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const diff = startCustomDate.difference(endCustomDate);

        this.totalYears += diff.years;
        this.totalMonths += diff.months;
        this.totalDays += diff.days;

        this.differences.push(diff);
      }
    });

    // Normalize the total months and days (convert 12 months to 1 year and 30 days to 1 month)
    this.normalizeTotals();
  }

  // Normalize the total months and days to make them fit into years and months
  normalizeTotals() {
    if (this.totalDays >= 30) {
      this.totalMonths += Math.floor(this.totalDays / 30);
      this.totalDays = this.totalDays % 30;
    }
    if (this.totalMonths >= 12) {
      this.totalYears += Math.floor(this.totalMonths / 12);
      this.totalMonths = this.totalMonths % 12;
    }
  }

  // Remove a date pair
  removeDatePair(index: number) {
    this.datePairs.removeAt(index);
  }
}
