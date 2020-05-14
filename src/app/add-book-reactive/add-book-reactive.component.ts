import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  constructor() { }

  bookForm=new FormGroup(
    {
      id:new FormControl('101'),
      title:new FormControl(''),
      price:new FormControl(''),
      authorForm:new FormGroup({
        name:new FormControl(''),
        email:new FormControl('')
      })
    }
  );

  ngOnInit(): void {
  }

}
