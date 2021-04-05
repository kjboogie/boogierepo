import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDataComponent } from './loan-data.component';

describe('LoanDataComponent', () => {
  let component: LoanDataComponent;
  let fixture: ComponentFixture<LoanDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
