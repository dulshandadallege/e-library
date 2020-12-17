import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddPopupComponent } from './book-add-popup.component';

describe('BookAddPopupComponent', () => {
  let component: BookAddPopupComponent;
  let fixture: ComponentFixture<BookAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
