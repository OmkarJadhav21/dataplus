import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemLoanAccComponent } from './mem-loan-acc.component';

describe('MemLoanAccComponent', () => {
  let component: MemLoanAccComponent;
  let fixture: ComponentFixture<MemLoanAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemLoanAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemLoanAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
