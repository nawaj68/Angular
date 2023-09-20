import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGropsComponent } from './input-grops.component';

describe('InputGropsComponent', () => {
  let component: InputGropsComponent;
  let fixture: ComponentFixture<InputGropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
