import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  id:number;
  title:string;
  author:string;
  price:number;
  books:Array<Book>=[];
  constructor() { }

  ngOnInit(): void {
  }
  addBook(){
    let book:Book=new Book();
    book.id=this.id;
    book.title=this.title;
    book.author=this.author;
    book.price=this.price;
    this.books.push(book);
    alert("1 Book Added");

  }

}
