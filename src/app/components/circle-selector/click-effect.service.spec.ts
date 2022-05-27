import { TestBed } from '@angular/core/testing';

import { ClickEffectService } from './click-effect.service';

describe('ClickEffectService', () => {
  let service: ClickEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
