import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadcapComponent } from './leadcap.component';

describe('LeadcapComponent', () => {
  let component: LeadcapComponent;
  let fixture: ComponentFixture<LeadcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadcapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
