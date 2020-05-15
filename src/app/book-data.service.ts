import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {


  constructor(private bookClient:HttpClient) { }

  baseUrl="http://localhost:8000/api/";
  addBook(book:Book):Observable<Book>{
    return this.bookClient.post<Book>(this.baseUrl+"books",book);
   
  }

  getAllBooks():Observable<Array<Book>>{
    return this.bookClient.get<Array<Book>>(this.baseUrl+"books");
  }


  deleteBookById(id:number):Observable<any>{
   return this.bookClient.delete(this.baseUrl+"books/"+id);
  }


  searchById(id:number):Observable<Book>{
    return this.bookClient.get<Book>(this.baseUrl+"books/"+id);
  }
  updateBook(book:Book):Observable<Book>{
   return this.bookClient.put<Book>(this.baseUrl+"books",book);
  }
}
