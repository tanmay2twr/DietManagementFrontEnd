import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ChallengerRegistration } from '../../challenger-registration';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {
  public dataSource: MatTableDataSource<ChallengerRegistration>;
  public requests: ChallengerRegistration[];
  public result: any;
  public message: any;
  displayedColumns: string[] = ['fullName', 'age', 'gender', 'mobileNumber',
    'email', 'address', 'city', 'state', 'pincode', 'country',
    'height', 'weight', 'BMI', 'reason', 'existing_medical', 'existing_dietary',
    'dietary_custom', 'pregnant_status', 'referral_code', "accept", "reject"];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private service: AdminService,public router:Router,public route:ActivatedRoute) {
    this.dataSource = new MatTableDataSource<ChallengerRegistration>();
  }
  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.service.veiwRequests().subscribe(requests => {
      this.requests = requests;
      this.dataSource = new MatTableDataSource(this.requests);
    });
    console.log(this.requests)
  }
  accept(email) {
    this.service.acceptRequest(email).subscribe(data => {
      alert("Request Accepted");
      this.ngOnInit();
    });
  }
  reject(email) {
    console.log("reject button clicked");    
    this.service.rejectRequest(email).subscribe(data => {
      alert("Request Removed");
      this.ngOnInit();
    });
  }
}