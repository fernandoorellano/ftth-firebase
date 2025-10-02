import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFaltantesComponent } from './listado-faltantes.component';

describe('ListadoFaltantesComponent', () => {
  let component: ListadoFaltantesComponent;
  let fixture: ComponentFixture<ListadoFaltantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFaltantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFaltantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
