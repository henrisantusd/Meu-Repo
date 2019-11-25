import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPjnPage } from './dynamic-pjn.page';

describe('DynamicPjnPage', () => {
  let component: DynamicPjnPage;
  let fixture: ComponentFixture<DynamicPjnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPjnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPjnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
