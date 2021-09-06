import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoanComponent } from './client-loan.component';

describe('ClientLoanComponent', () => {
  let component: ClientLoanComponent;
  let fixture: ComponentFixture<ClientLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
