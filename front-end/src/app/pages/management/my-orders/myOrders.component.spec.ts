import { ComponentFixture, TestBed } from '@angular/core/testing';

import { myOrdersComponent } from './myOrders.component';

describe('myOrdersComponent', () => {
  let component: myOrdersComponent;
  let fixture: ComponentFixture<myOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [myOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(myOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
