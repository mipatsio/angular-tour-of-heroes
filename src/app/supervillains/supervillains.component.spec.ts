import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervillainsComponent } from './supervillains.component';

describe('SupervillainsComponent', () => {
  let component: SupervillainsComponent;
  let fixture: ComponentFixture<SupervillainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervillainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervillainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
