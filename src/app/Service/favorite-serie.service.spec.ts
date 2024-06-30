import { TestBed } from '@angular/core/testing';

import { FavoriteSerieService } from './favorite-serie.service';

describe('FavoriteSerieService', () => {
  let service: FavoriteSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
