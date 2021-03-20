import { Component, OnInit } from '@angular/core';
import { ChallengerMonthlyLogs } from 'src/app/challenger-monthly-logs';
import { ChallengerService } from '../../challenger.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-monthly-chart',
  templateUrl: './update-monthly-chart.component.html',
  styleUrls: ['./update-monthly-chart.component.css']
})
export class UpdateMonthlyChartComponent implements OnInit {

  log = new ChallengerMonthlyLogs();
  constructor(public service: ChallengerService, public router: Router, public route: ActivatedRoute) { }
  update() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    this.log.username = loggedInUser.username;
    this.log.fullName = loggedInUser.name;
    this.log.batchName = loggedInUser.batchName;
    this.log.batchGroup = loggedInUser.batchGroup;
    console.log(this.log);
    this.service.saveMonthlyLogs(this.log).subscribe(data => {
      console.log("response recieved");
      alert("Logs Updated")
      this.router.navigate(['../cards'], { relativeTo: this.route });
    });
  }

  ngOnInit() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
  }

}
