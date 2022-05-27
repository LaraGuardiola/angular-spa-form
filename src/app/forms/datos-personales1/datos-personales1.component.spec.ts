import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonales1Component } from './datos-personales1.component';

describe('DatosPersonales1Component', () => {
  let component: DatosPersonales1Component;
  let fixture: ComponentFixture<DatosPersonales1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPersonales1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPersonales1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
