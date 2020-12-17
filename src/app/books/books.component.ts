import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './../backend-api.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  itemList = [];

  // array = [
  //   {
  //     name: 'Brave',
  //     image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Brave_FilmPosters-202x300.jpg',

  //   },
  //   {
  //     name: 'Enchantment',
  //     image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1-197x300.jpg',

  //   },
  //   {
  //     name: 'Harry potter',
  //     image: 'https://www.creativindie.com/wp-content/uploads/2013/10/harry-potter-order-of-the-phoenix-kazu-kibuishi-cover-195x300.jpg',

  //   },
  // ];

  constructor(private bookdetailsServices: BackendApiService) { }

  getBookDetails(){

    const book = {};

    this.bookdetailsServices.getBookDetails(book).subscribe(result => {
      console.log(result);
      console.log('result.length');
      console.log(result.data.length);

      for ( let i = 0; i < result.data.length; i++ ) {

        this.itemList.push(result.data[i]);
        console.log('Joooo');
        console.log(result.data[i]);

      }


    });
  }

  ngOnInit() {
  }

}
