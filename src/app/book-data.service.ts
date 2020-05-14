import { Injectable } from '@angular/core';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  books:Array<Book>=[
    {
      id:101,
      author:'Steve',
      title:'Angular Programming',
      price:2500
    },
    {
      id:102,
      author:'Alan',
      title:'Java Microservices',
      price:3500
    },
    {
      id:103,
      author:'John',
      title:'HTML Basics',
      price:1000
    }
  ];

  constructor() { }

  addBook(book:Book){
    this.books.push(book);
  }
  deleteBookById(id:number):boolean{
    for(let i=0;i<this.books.length;i++){
      {
        if(this.books[i].id==id){
          this.books.splice(i,1);
          return true;
        }
      }
    return false;
  }
  }

  searchById(id:number):Book{
    return this.books.find(b=>b.id==id);
  }
  updateBook(book:Book):boolean{
    console.log(book);

    let b=this.searchById(book.id);
    b.author=book.author;
    b.price=book.price;
    b.title=book.title;
    console.log(b);
    return true;
  }
}
