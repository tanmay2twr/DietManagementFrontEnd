import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { ChallengerMonthlyLogs } from './challenger-monthly-logs';
import { Message } from './message'
import { Observable } from 'rxjs';
import { DailyLog } from './daily-log';
import { DietPlanFile } from './diet-plan-file';
@Injectable({
  providedIn: 'root'
})
export class ChallengerService {

  constructor(public http: HttpClient) { }

  saveMonthlyLogs(log: ChallengerMonthlyLogs) {
    return this.http.post("http://localhost:8090/saveMonthlyLogs", log, { responseType: 'text' as 'json' });
  }
  saveDailyLog(log: DailyLog) {
    return this.http.post("http://localhost:8090/saveDailyLog", log, { responseType: 'text' as 'json' });
  }

  viewMessage(email): Observable<Message[]> {
    return this.http.post<Message[]>("http://localhost:8090/viewMessage", email);
  }

  deleteMessage(id) {
    console.log("delete message");
    return this.http.post("http://localhost:8090/deleteMessage", id, { responseType: 'text' as 'json' });
  }

  getFiles(username) {
    return this.http.post<DietPlanFile[]>("http://localhost:8090/getFiles",username);
  }
  downloadFile(id): any {
    return this.http.post("http://localhost:8090/downloadFile", id, { responseType: 'blob' });
  }
}