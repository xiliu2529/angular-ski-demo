import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiResorts } from './ski-resorts';

describe('SkiResorts', () => {
  let component: SkiResorts;
  let fixture: ComponentFixture<SkiResorts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkiResorts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiResorts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
