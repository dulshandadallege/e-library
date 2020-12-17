import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperAddPopupComponent } from './newspaper-add-popup.component';

describe('NewspaperAddPopupComponent', () => {
  let component: NewspaperAddPopupComponent;
  let fixture: ComponentFixture<NewspaperAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
