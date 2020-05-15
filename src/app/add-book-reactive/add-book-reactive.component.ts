import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { forbiddenTitleValidator } from './title-validator';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css']
})
export class AddBookReactiveComponent implements OnInit {

  constructor(private fBuilder:FormBuilder) { }

  // bookForm=new FormGroup(
  //   {
  //     id:new FormControl('101'),
  //     title:new FormControl(''),
  //     price:new FormControl(''),
  //     authorForm:new FormGroup({
  //       name:new FormControl(''),
  //       email:new FormControl('')
  //     })
  //   }
  // );

  bookForm=this.fBuilder.group(
    {
      id:['',Validators.required],
      title:['',[Validators.required,Validators.minLength(3),forbiddenTitleValidator]],
      price:[''],
      authorForm:this.fBuilder.group({
        name:[''],
        email:['',[Validators.required,Validators.email]]
      })
    }
  );

  ngOnInit(): void {
  }

}
