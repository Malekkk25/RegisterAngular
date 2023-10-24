import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAeroportsComponent } from './liste-aeroports.component';

describe('ListeAeroportsComponent', () => {
  let component: ListeAeroportsComponent;
  let fixture: ComponentFixture<ListeAeroportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAeroportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAeroportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
