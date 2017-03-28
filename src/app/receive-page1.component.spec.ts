import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePage1Component } from './receive-page1.component';

describe('ReceivePage1Component', () => {
  let component: ReceivePage1Component;
  let fixture: ComponentFixture<ReceivePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
