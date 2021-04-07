import { TestBed } from '@angular/core/testing';

import { MaladievaccinService } from './maladievaccin.service';

describe('MaladievaccinService', () => {
  let service: MaladievaccinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaladievaccinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
