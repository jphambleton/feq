import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateListingComponent } from './affiliate-listing.component';

describe('AffiliateListingComponent', () => {
  let component: AffiliateListingComponent;
  let fixture: ComponentFixture<AffiliateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
