import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPagePage } from './minha-page.page';

describe('MinhaPagePage', () => {
  let component: MinhaPagePage;
  let fixture: ComponentFixture<MinhaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
