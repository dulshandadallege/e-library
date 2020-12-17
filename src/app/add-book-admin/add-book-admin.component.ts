import { BookAddPopupComponent } from './../book-add-popup/book-add-popup.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-add-book-admin',
  templateUrl: './add-book-admin.component.html',
  styleUrls: ['./add-book-admin.component.scss']
})
export class AddBookAdminComponent implements OnInit {



  constructor(private dialog: MatDialog) { }


  openPopup() {
    this.dialog.open(BookAddPopupComponent, {
      width: 'auto',
      height: 'auto',

    });
  }

  ngOnInit() {
  }

}
