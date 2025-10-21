import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpagoComponent } from './controlpago.component';

describe('ControlpagoComponent', () => {
  let component: ControlpagoComponent;
  let fixture: ComponentFixture<ControlpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlpagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
