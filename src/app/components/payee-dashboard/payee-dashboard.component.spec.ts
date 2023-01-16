import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeDashboardComponent } from './payee-dashboard.component';

describe('PayeeDashboardComponent', () => {
  let component: PayeeDashboardComponent;
  let fixture: ComponentFixture<PayeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
