import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengerMonthlyLogs } from 'src/app/challenger-monthly-logs';

@Component({
  selector: 'app-view-monthly-logs',
  templateUrl: './view-monthly-logs.component.html',
  styleUrls: ['./view-monthly-logs.component.css']
})
export class ViewMonthlyLogsComponent implements OnInit {
  logs: ChallengerMonthlyLogs[];
  constructor(public service: AdminService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    let email = this.route.snapshot.paramMap.get('email');
    this.service.getMonthlyLogs(email).subscribe(data => {
      this.logs = data;
    });
  }

}
