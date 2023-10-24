import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParAeroportComponent } from './recherche-par-aeroport.component';

describe('RechercheParAeroportComponent', () => {
  let component: RechercheParAeroportComponent;
  let fixture: ComponentFixture<RechercheParAeroportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParAeroportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParAeroportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
