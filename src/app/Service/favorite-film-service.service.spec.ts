import { TestBed } from '@angular/core/testing';

import { FavoriteFilmServiceService } from './favorite-film-service.service';

describe('FavoriteFilmServiceService', () => {
  let service: FavoriteFilmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteFilmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
