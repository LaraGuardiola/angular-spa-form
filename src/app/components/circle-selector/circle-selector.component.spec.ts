import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleSelectorComponent } from './circle-selector.component';

describe('CircleSelectorComponent', () => {
  let component: CircleSelectorComponent;
  let fixture: ComponentFixture<CircleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
