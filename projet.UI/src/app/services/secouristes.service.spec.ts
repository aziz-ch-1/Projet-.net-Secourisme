import { TestBed } from '@angular/core/testing';

import { SecouristesService } from './secouristes.service';

describe('SecouristesService', () => {
  let service: SecouristesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecouristesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
