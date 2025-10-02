import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActualesComponent } from './listado-actuales.component';

describe('ListadoActualesComponent', () => {
  let component: ListadoActualesComponent;
  let fixture: ComponentFixture<ListadoActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
