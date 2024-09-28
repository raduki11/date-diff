import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateDifferenceComponent } from './date-difference/date-difference.component';

const routes: Routes = [
  { path: '', redirectTo: '/date-diff', pathMatch: 'full' }, // Redirect to date-diff
  { path: 'date-diff', component: DateDifferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
