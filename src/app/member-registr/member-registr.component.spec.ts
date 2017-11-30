import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRegistrComponent } from './member-registr.component';

describe('MemberRegistrComponent', () => {
  let component: MemberRegistrComponent;
  let fixture: ComponentFixture<MemberRegistrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberRegistrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRegistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
