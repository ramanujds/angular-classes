import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  
  constructor(public bookService:BookDataService, private router:Router) { }
  books:Array<Book>;
  ngOnInit(): void {
      this.bookService.getAllBooks().subscribe(
        books=>{
          this.books=books;
        }
      )
  }
  delete(id:number){
    if(confirm("Sure to Delete?")){
      this.bookService.deleteBookById(id).subscribe(
        (success)=>{
          alert("Deleted Successfully");
        },
        error=>{
          console.log(error);
          alert("Failed");
        }
      )
    }
  }
  update(id:number){
    this.router.navigate(['/update/'+id]);
  }

}
