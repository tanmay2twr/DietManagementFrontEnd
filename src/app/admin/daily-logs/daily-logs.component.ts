import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-daily-logs',
  templateUrl: './daily-logs.component.html',
  styleUrls: ['./daily-logs.component.css']
})
export class DailyLogsComponent implements OnInit {
  logs: DailyLogsComponent[];

  constructor(public service: AdminService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    let email = this.route.snapshot.paramMap.get('email');
    this.service.getDailyLogs(email).subscribe(data => {
      this.logs = data;
    });
  }
}