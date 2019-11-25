import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPagePage } from './m-page.page';

describe('MPagePage', () => {
  let component: MPagePage;
  let fixture: ComponentFixture<MPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
