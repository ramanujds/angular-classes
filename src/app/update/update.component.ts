import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
book:Book;
  id:number;
  title:string;
  author:string;
  price:number;
  constructor(private activeRoute:ActivatedRoute,private bookService:BookDataService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param)=>{
    let id=param['id'];
      console.log(id);
    let  book=this.bookService.searchById(id);
    
    if(book){
      this.book=book;
     this.id=book.id;
     this.title=book.title;
     this.author=book.author;
     this.price=book.price;
    }
    }
    )

  }


  updateBook(){
    this.book.author=this.author;
    this.book.id=this.id;
    this.book.price=this.price;
    this.book.title=this.title;
    if(this.bookService.updateBook(this.book)){
      alert("Updated");
    }
  }

}
