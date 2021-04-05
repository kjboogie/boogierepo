import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorderDataComponent } from './debitorder-data.component';

describe('DebitorderDataComponent', () => {
  let component: DebitorderDataComponent;
  let fixture: ComponentFixture<DebitorderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitorderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitorderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
