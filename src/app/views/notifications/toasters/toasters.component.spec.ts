import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastersComponent } from './toasters.component';

describe('ToastersComponent', () => {
  let component: ToastersComponent;
  let fixture: ComponentFixture<ToastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
