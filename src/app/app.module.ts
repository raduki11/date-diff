import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { MatInputModule } from '@angular/material/input'; // Material input field
import { MatButtonModule } from '@angular/material/button'; // Material button
import { MatIconModule } from '@angular/material/icon'; // Material icons
import { MatCardModule } from '@angular/material/card'; // Material card
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker
import { MatNativeDateModule } from '@angular/material/core'; // Datepicker core
import { DateDifferenceComponent } from './date-difference/date-difference.component';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent, 
    DateDifferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
