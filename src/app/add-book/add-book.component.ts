import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

import { BookDataService } from '../book-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
 
  constructor(public bookService:BookDataService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook(f){
    console.log(f);
    let book:Book=new Book();
    book.id=this.id;
    book.title=this.title;
    book.author=this.author;
    book.price=this.price;
    this.bookService.addBook(book);
    this.router.navigate(['/viewall']);
    
  }

}
