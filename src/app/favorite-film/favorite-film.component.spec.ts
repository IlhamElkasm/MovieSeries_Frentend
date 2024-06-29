import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFilmComponent } from './favorite-film.component';

describe('FavoriteFilmComponent', () => {
  let component: FavoriteFilmComponent;
  let fixture: ComponentFixture<FavoriteFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteFilmComponent]
    });
    fixture = TestBed.createComponent(FavoriteFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
