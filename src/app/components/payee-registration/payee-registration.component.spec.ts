import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeRegistrationComponent } from './payee-registration.component';

describe('PayeeRegistrationComponent', () => {
  let component: PayeeRegistrationComponent;
  let fixture: ComponentFixture<PayeeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
