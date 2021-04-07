import { TestBed } from '@angular/core/testing';

import { MaladiecalendrierService } from './maladiecalendrier.service';

describe('MaladiecalendrierService', () => {
  let service: MaladiecalendrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaladiecalendrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
