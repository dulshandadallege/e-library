import { BackendApiService } from './../backend-api.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-add-popup',
  templateUrl: './book-add-popup.component.html',
  styleUrls: ['./book-add-popup.component.scss']
})
export class BookAddPopupComponent implements OnInit {

  name;
  author;
  isbn;
  year;
  category;
  condition;
  publish;
  price;
  image;
  discription;


  foods: Food[] = [
    {value: 'novel', viewValue: 'Novel'},
    {value: 'educational', viewValue: 'Educational'},
  ];


  conditions: Food[] = [
    {value: 'public', viewValue: 'Public'},
    {value: 'rare', viewValue: 'Rare'},
  ];


  constructor(private addBookServices: BackendApiService,  public snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  addBookDetailsDB() {

    console.log(' test ');
    console.log(this.name);
    console.log(this.author);
    console.log(this.isbn);
    console.log(this.year);
    console.log(this.category);
    console.log(this.condition);
    console.log(this.discription);
    console.log(this.price);
    console.log(this.image);


    const books = {};

    books['Book_Name'] = this.name;
    books['Book_Author_Name'] = this.author;
    books['Book_ISBN'] = this.isbn;
    books['Book_Publish_Year'] = this.year;
    books['Book_Category'] = this.category;
    books['Book_Type'] = this.condition;
    books['Book_Description'] = this.discription;
    books['Book_Price'] = this.price;
    books['Book_Image'] = this.image;
    books['Book_IsDelete'] = '0';

    this.addBookServices.addBookDetails(books).subscribe(result => {
      console.log(result);

    });
    this.openSnackBar('Your Add Posted Sucessfully', 'OK');




  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
