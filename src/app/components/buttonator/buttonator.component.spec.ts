import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonatorComponent } from './buttonator.component';

describe('ButtonatorComponent', () => {
  let component: ButtonatorComponent;
  let fixture: ComponentFixture<ButtonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
