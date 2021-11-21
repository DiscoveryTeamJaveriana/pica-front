import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInspeccionComponent } from './crear-inspeccion.component';

describe('CrearInspeccionComponent', () => {
  let component: CrearInspeccionComponent;
  let fixture: ComponentFixture<CrearInspeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInspeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
