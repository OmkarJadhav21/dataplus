import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemExtrnlFundComponent } from './mem-extrnl-fund.component';

describe('MemExtrnlFundComponent', () => {
  let component: MemExtrnlFundComponent;
  let fixture: ComponentFixture<MemExtrnlFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemExtrnlFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemExtrnlFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
