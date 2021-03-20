import { Component, OnInit } from '@angular/core';
import { DailyLog } from 'src/app/daily-log';
import { ChallengerService } from 'src/app/challenger.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-daily-logs',
  templateUrl: './update-daily-logs.component.html',
  styleUrls: ['./update-daily-logs.component.css']
})
export class UpdateDailyLogsComponent implements OnInit {

  constructor(public service: ChallengerService, public router: Router, public route: ActivatedRoute) { }
  log = new DailyLog();

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
  }
  update() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    this.log.username = loggedInUser.username;
    this.log.fullName = loggedInUser.name;
    this.log.batchName = loggedInUser.batchName;
    this.log.batchGroup = loggedInUser.batchGroup;
    console.log(this.log);
    this.service.saveDailyLog(this.log).subscribe(data => {
      console.log("response recieved");
      alert("Logs Updated")
      this.router.navigate(['../cards'], { relativeTo: this.route });
    });
  }

}
