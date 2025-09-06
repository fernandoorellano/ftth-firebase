import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFuturosComponent } from './listado-futuros.component';

describe('ListadoFuturosComponent', () => {
  let component: ListadoFuturosComponent;
  let fixture: ComponentFixture<ListadoFuturosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFuturosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFuturosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
