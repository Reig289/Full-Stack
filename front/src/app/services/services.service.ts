import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  // Conexión con el back //
  
  selectedBooks: Books;
  sbooks : Books[];

  readonly URL_API='http://localhost:3001/api/routes';

  constructor(private http:HttpClient) { 
      this.selectedBooks = new Books();
   }

  getBook(){
    return this.http.get(this.URL_API + '/getBook');  
  };

  postBook(book: Books){
    return this.http.post(this.URL_API + '/postBook', book);  
  };

  postBookD(book: Books){
    return this.http.post(this.URL_API + '/postBook'+`/${book.book}`, book);  
  };


}
