import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuliselectautocopleteComponent } from './muliselectautocoplete.component';

describe('MuliselectautocopleteComponent', () => {
  let component: MuliselectautocopleteComponent;
  let fixture: ComponentFixture<MuliselectautocopleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuliselectautocopleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuliselectautocopleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
