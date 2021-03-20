import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChallengerRegistration } from './challenger-registration';
import { ChallengerMonthlyLogs } from './challenger-monthly-logs'
import { User } from './user';
import { DailyLogsComponent } from './admin/daily-logs/daily-logs.component';
import { BatchDetailsComponent } from './admin/batch-details/batch-details.component';
import { BatchDetails } from './batch-details';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  requests: Observable<ChallengerRegistration[]>;

  constructor(private http: HttpClient) { }

  //to get all login requests
  public veiwRequests(): Observable<ChallengerRegistration[]> {
    this.requests = this.http.get<ChallengerRegistration[]>("http://localhost:8090/viewRequests");
    return this.requests;
  }

  //accept a challenger
  public acceptRequest(email) {
    return this.http.post("http://localhost:8090/acceptRequest", email);
  }

  //reject a challenger
  public rejectRequest(email) {
    return this.http.post("http://localhost:8090/rejectRequest", email)
  }
  //return all users
  public returnAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8090/returnAllUsers");
  }
  //delete a User
  public deleteUser(email) {
    return this.http.post("http://localhost:8090/deleteUser", email)
  }
  //return all challengers
  public returnAllChallengers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8090/returnAllChallengers");
  }
  //get monthly logs of a particular challenger
  public getMonthlyLogs(email): Observable<ChallengerMonthlyLogs[]> {
    return this.http.post<ChallengerMonthlyLogs[]>("http://localhost:8090/viewMonthlyLogs", email)
  }
  //get daily logs of a particular challenger
  public getDailyLogs(email): Observable<DailyLogsComponent[]> {
    return this.http.post<DailyLogsComponent[]>("http://localhost:8090/viewDailyLog", email)
  }
  //send message 
  public sendMessage(data) {
    return this.http.post<ChallengerMonthlyLogs[]>("http://localhost:8090/addMessage", data)
  }
  //upload diet workout plan
  public uploadFile(formData: FormData): Observable<any> {
    return this.http.post("http://localhost:8090/uploadFile", formData, { responseType: 'text' as 'json' });
  }
  //return all batches
  public getBatches(): Observable<BatchDetailsComponent[]> {
    return this.http.get<BatchDetailsComponent[]>("http://localhost:8090/getBatches");
  }
  //return all challengers
  public getMentors(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8090/getMentors");
  }
  //assign mentor 
  public assignMentor(formData): Observable<string> {
    return this.http.post<string>("http://localhost:8090/assignMentor", formData, { responseType: 'text' as 'json' });
  }
}
