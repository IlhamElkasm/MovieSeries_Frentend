import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefavoritSerieComponent } from './createfavorit-serie.component';

describe('CreatefavoritSerieComponent', () => {
  let component: CreatefavoritSerieComponent;
  let fixture: ComponentFixture<CreatefavoritSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatefavoritSerieComponent]
    });
    fixture = TestBed.createComponent(CreatefavoritSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
