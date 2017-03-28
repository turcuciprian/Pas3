import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastePage1Component } from './paste-page1.component';

describe('PastePage1Component', () => {
  let component: PastePage1Component;
  let fixture: ComponentFixture<PastePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
