import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDisplayComponent } from './wallet-display.component';

describe('WalletDisplayComponent', () => {
  let component: WalletDisplayComponent;
  let fixture: ComponentFixture<WalletDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
