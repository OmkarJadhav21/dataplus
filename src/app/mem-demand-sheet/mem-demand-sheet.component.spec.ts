import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemDemandSheetComponent } from './mem-demand-sheet.component';

describe('MemDemandSheetComponent', () => {
  let component: MemDemandSheetComponent;
  let fixture: ComponentFixture<MemDemandSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemDemandSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemDemandSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
