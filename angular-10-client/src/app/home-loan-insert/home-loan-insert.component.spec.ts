import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanInsertComponent } from './home-loan-insert.component';

describe('HomeLoanInsertComponent', () => {
  let component: HomeLoanInsertComponent;
  let fixture: ComponentFixture<HomeLoanInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
