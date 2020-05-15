import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../UesrInfo';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  constructor(private userService:UserInfoService) { }
  users:Array<UserInfo>;
  ngOnInit(): void {

    this.userService.getAllUser().subscribe(
      (users)=>{
        this.users=users
      },
      error=>{
        alert("No User Found");
      }
    )

  }

}
