import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescifradoComponent } from './descifrado.component';

describe('DescifradoComponent', () => {
  let component: DescifradoComponent;
  let fixture: ComponentFixture<DescifradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescifradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
