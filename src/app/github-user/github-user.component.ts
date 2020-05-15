import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  username:string;
  user:User;
  ngOnInit(): void {
  }
  getGithubInfo(){
    this.httpClient.get("http://api.github.com/users/"+this.username).subscribe(
      
        (user:User)=>{
          this.user=user;
          console.log(user);
      },
      (error)=>{
        alert("Error.. User not Found");
      }
    )
    

  }

}
