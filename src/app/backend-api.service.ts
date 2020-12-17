import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private apiUrl = environment.apiUrl;
  private requestOptions;

  constructor(private http: HttpClient) {

    this.requestOptions = new RequestOptions();
    this.requestOptions.withCredentials = true;
    this.requestOptions = {
      headers: new HttpHeaders({
      }),
      responseType: 'json',
    };
   }

   getBookDetails(bookdetailsServices): Observable<any> {

    return this.http.post<any>(this.apiUrl + 'eLibrary/api/get-book-details.php' , bookdetailsServices , this.requestOptions);
 }





 addBookDetails(addBookServices): Observable<any> {

    return this.http.post<any>(this.apiUrl + 'eLibrary/api/save-book-details.php' , addBookServices , this.requestOptions);


}

userRegister(registerUser): Observable<any> {

  return this.http.post<any>(this.apiUrl + 'eLibrary/api/register-user.php' , registerUser , this.requestOptions);


}


}

