import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuerzaBrutaComponent } from './fuerza-bruta.component';

describe('FuerzaBrutaComponent', () => {
  let component: FuerzaBrutaComponent;
  let fixture: ComponentFixture<FuerzaBrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuerzaBrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuerzaBrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
