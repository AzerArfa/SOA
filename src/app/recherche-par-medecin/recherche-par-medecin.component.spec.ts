import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParMedecinComponent } from './recherche-par-medecin.component';

describe('RechercheParMedecinComponent', () => {
  let component: RechercheParMedecinComponent;
  let fixture: ComponentFixture<RechercheParMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParMedecinComponent]
    });
    fixture = TestBed.createComponent(RechercheParMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
