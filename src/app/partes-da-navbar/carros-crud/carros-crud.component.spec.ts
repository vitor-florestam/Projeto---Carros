import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCrudComponent } from './carros-crud.component';

describe('CarrosCrudComponent', () => {
  let component: CarrosCrudComponent;
  let fixture: ComponentFixture<CarrosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
