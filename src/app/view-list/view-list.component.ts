import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  
  constructor(public bookService:BookDataService, private router:Router) { }

  ngOnInit(): void {

  }
  delete(id:number){
    if(confirm("Sure to Delete?")){
      if(this.bookService.deleteBookById(id)){
        alert("Deleted Successfully");
      }
    }
  }
  update(id:number){
    this.router.navigate(['/update/'+id]);
  }

}
