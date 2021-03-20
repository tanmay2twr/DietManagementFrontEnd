import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ChallengerRegistration } from './challenger-registration';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor( private _http : HttpClient) { }

  public registerUserFromRemote(challengerRegistration :ChallengerRegistration): Observable<any>{
     return this._http.post("http://localhost:8090/registerUser",challengerRegistration)
  } 
}
