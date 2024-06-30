import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherSerieComponent } from './afficher-serie.component';

describe('AfficherSerieComponent', () => {
  let component: AfficherSerieComponent;
  let fixture: ComponentFixture<AfficherSerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherSerieComponent]
    });
    fixture = TestBed.createComponent(AfficherSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
