import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjnComponent } from './pjn.component';

describe('PjnComponent', () => {
  let component: PjnComponent;
  let fixture: ComponentFixture<PjnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjnComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
