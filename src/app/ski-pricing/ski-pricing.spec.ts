import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPricing } from './ski-pricing';

describe('SkiPricing', () => {
  let component: SkiPricing;
  let fixture: ComponentFixture<SkiPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkiPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiPricing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
