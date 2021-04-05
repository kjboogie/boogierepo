import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorderInsertComponent } from './debitorder-insert.component';

describe('DebitorderInsertComponent', () => {
  let component: DebitorderInsertComponent;
  let fixture: ComponentFixture<DebitorderInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitorderInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitorderInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
