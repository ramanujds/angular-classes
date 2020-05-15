import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../UesrInfo';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user:UserInfo;
  constructor(private userService:UserInfoService) { }

  ngOnInit(): void {
    this.user=new UserInfo();
  }
  addUser(){
    this.userService.addUser(this.user).subscribe(
      response=>{
        alert("User Added Xuccessfully");
      },

      error=>{
        alert("Error..");
      }
      
    );

  }

}
