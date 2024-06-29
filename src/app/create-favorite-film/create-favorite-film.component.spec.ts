import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFavoriteFilmComponent } from './create-favorite-film.component';

describe('CreateFavoriteFilmComponent', () => {
  let component: CreateFavoriteFilmComponent;
  let fixture: ComponentFixture<CreateFavoriteFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFavoriteFilmComponent]
    });
    fixture = TestBed.createComponent(CreateFavoriteFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
