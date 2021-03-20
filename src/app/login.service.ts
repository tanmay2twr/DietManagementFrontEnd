import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor( private http : HttpClient) { }

  public login(authRequest):Observable<User>{
     return this.http.post<User>("http://localhost:8090/login",authRequest)
  } 

  public changePassword(user):any{
    return this.http.post<string>("http://localhost:8090/changePassword",user,{ responseType: 'text' as 'json' })
  }
}
