import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CifradoComponent } from './cifrado.component';

describe('CifradoComponent', () => {
  let component: CifradoComponent;
  let fixture: ComponentFixture<CifradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CifradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
