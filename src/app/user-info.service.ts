import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './UesrInfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  baseUrl="http://localhost:8888/api/users";
  constructor(private userClient:HttpClient) { 

  }

  public getUserById(id:number):Observable<UserInfo>{
      return this.userClient.get<UserInfo>(this.baseUrl+"/id/"+id);
  }

  public addUser(user:UserInfo):Observable<UserInfo>{
    return this.userClient.post<UserInfo>(this.baseUrl,user);
  }

  public deleteUserById(id:number){
    return this.userClient.delete(this.baseUrl+"/id/"+id);
  }
  public updateUser(user:UserInfo):Observable<UserInfo>{
    return this.userClient.put<UserInfo>(this.baseUrl,user);
  }

  public getAllUser():Observable<Array<UserInfo>>{
    return this.userClient.get<Array<UserInfo>>(this.baseUrl);
  }

}
