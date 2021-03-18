import { TestBed } from '@angular/core/testing';

import { VaccinsService } from './vaccins.service';

describe('VaccinsService', () => {
  let service: VaccinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
