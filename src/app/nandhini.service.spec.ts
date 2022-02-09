import { TestBed } from '@angular/core/testing';

import { NandhiniService } from './nandhini.service';

describe('NandhiniService', () => {
  let service: NandhiniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NandhiniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
