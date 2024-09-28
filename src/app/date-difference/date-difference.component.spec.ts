import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDifferenceComponent } from './date-difference.component';

describe('DateDifferenceComponent', () => {
  let component: DateDifferenceComponent;
  let fixture: ComponentFixture<DateDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateDifferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
