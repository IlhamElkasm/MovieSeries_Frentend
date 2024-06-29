import { TestBed } from '@angular/core/testing';

import { ServiceSerieService } from './service-serie.service';

describe('ServiceSerieService', () => {
  let service: ServiceSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
