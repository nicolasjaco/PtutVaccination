import { TestBed } from '@angular/core/testing';

import { UserinjectionService } from './userinjection.service';

describe('UserinjectionService', () => {
  let service: UserinjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
