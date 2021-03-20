import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengerMonthlyLogs } from 'src/app/challenger-monthly-logs';

@Component({
  selector: 'app-view-all-challengers',
  templateUrl: './view-all-challengers.component.html',
  styleUrls: ['./view-all-challengers.component.css']
})
export class ViewAllChallengersComponent implements OnInit {
  users: User[];
  constructor(public service: AdminService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.service.returnAllChallengers().subscribe(data => {
      this.users = data;
    });
  }

  viewMonthlyLogs(email) {
    this.router.navigate(['../viewMonthlyLogs', email], { relativeTo: this.route });
  }
  viewDailyLogs(email) {
    this.router.navigate(['../viewDailyLogs', email], { relativeTo: this.route });
  }
  viewCharts(email) {
    this.service.getMonthlyLogs(email).subscribe(data => {
      console.log(data);

      if (data.length >=1) {
        sessionStorage.setItem('log1', JSON.stringify({
          biceps: data[0].biceps, chest: data[0].chest,
          forearms: data[0].foreArms, height: data[0].height, shoulder: data[0].shoulders,
          thighs: data[0].thighs, waist: data[0].waist, weight: data[0].weight, month: data[0].month
        }))
      } if (data.length >= 2) {
        sessionStorage.setItem('log2', JSON.stringify({
          biceps: data[1].biceps, chest: data[1].chest,
          forearms: data[1].foreArms, height: data[1].height, shoulder: data[1].shoulders,
          thighs: data[1].thighs, waist: data[1].waist, weight: data[1].weight, month: data[1].month
        }))
      } if (data.length == 3) {
        sessionStorage.setItem('log3', JSON.stringify({
          biceps: data[2].biceps, chest: data[2].chest,
          forearms: data[2].foreArms, height: data[2].height, shoulder: data[2].shoulders,
          thighs: data[2].thighs, waist: data[2].waist, weight: data[2].weight, month: data[2].month
        }))
      }
      this.router.navigate(['../viewCharts'], { relativeTo: this.route });
    })
  }
}
