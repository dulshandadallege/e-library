import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrovenmentAddPopupComponent } from './grovenment-add-popup.component';

describe('GrovenmentAddPopupComponent', () => {
  let component: GrovenmentAddPopupComponent;
  let fixture: ComponentFixture<GrovenmentAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrovenmentAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrovenmentAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
