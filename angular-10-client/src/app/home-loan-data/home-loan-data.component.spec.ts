import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanDataComponent } from './home-loan-data.component';

describe('HomeLoanDataComponent', () => {
  let component: HomeLoanDataComponent;
  let fixture: ComponentFixture<HomeLoanDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
