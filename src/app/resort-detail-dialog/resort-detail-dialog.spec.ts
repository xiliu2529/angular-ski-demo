import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortDetailDialog } from './resort-detail-dialog';

describe('ResortDetailDialog', () => {
  let component: ResortDetailDialog;
  let fixture: ComponentFixture<ResortDetailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResortDetailDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResortDetailDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
