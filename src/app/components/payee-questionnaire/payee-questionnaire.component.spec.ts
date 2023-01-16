import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeQuestionnaireComponent } from './payee-questionnaire.component';

describe('PayeeQuestionnaireComponent', () => {
  let component: PayeeQuestionnaireComponent;
  let fixture: ComponentFixture<PayeeQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeeQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
