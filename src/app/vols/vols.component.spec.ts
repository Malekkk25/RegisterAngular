import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsComponent } from './VolsComponent';

describe('VolsComponent', () => {
  let component: VolsComponent;
  let fixture: ComponentFixture<VolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
