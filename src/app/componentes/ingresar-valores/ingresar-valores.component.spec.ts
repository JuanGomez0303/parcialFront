import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarValoresComponent } from './ingresar-valores.component';

describe('IngresarValoresComponent', () => {
  let component: IngresarValoresComponent;
  let fixture: ComponentFixture<IngresarValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarValoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
