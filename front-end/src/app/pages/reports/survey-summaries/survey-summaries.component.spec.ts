import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySummariesComponent } from './survey-summaries.component';

describe('SurveySummariesComponent', () => {
  let component: SurveySummariesComponent;
  let fixture: ComponentFixture<SurveySummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveySummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveySummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
