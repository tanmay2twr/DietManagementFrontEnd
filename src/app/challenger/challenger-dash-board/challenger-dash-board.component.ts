import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallengerService } from 'src/app/challenger.service';

@Component({
  selector: 'app-challenger-dash-board',
  templateUrl: './challenger-dash-board.component.html',
  styleUrls: ['./challenger-dash-board.component.css']
})
export class ChallengerDashBoardComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  update() {
    this.router.navigate(['updateMonthlyLog'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../homepage'], { relativeTo: this.route });
    }
    this.router.navigate(['cards'], { relativeTo: this.route });
  }

  viewMessage() {
    console.log("view message clicked");
    this.router.navigate(['viewMessage'], { relativeTo: this.route });
  }

  message() {
    console.log("message button clicked");
    this.router.navigate(['message'], { relativeTo: this.route });
  }

  updateDailyLog() {
    this.router.navigate(['updateDailyLogs'], { relativeTo: this.route });
  }

  viewDietChart() {
    this.router.navigate(['viewDietChart'], { relativeTo: this.route });
  }

  changePassword() {
    console.log("change password clicked");
    this.router.navigate(['changePassword'], { relativeTo: this.route });
  }

  logOut() {
    sessionStorage.setItem("loggedInUser", null)
    this.router.navigate(['../homepage'], { relativeTo: this.route });
  }
}
