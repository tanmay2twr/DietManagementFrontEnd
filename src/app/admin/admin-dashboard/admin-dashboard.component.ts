import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../../admin.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private service: AdminService, private router: Router, private route: ActivatedRoute) { }
  showFiller = false;

  ngOnInit() {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../homepage'], { relativeTo: this.route });
    }
    this.router.navigate(['cards'], { relativeTo: this.route });

  }

  onsubmit() {
    console.log("button clicked");
    this.router.navigate(['viewRequests'], { relativeTo: this.route });
  }

  search() {
    console.log("search button clicked");
    this.router.navigate(['adminSearch'], { relativeTo: this.route });
  }

  viewChallengers() {
    console.log("view challengers button clicked");
    this.router.navigate(['viewChallengers'], { relativeTo: this.route });
  }

  message() {
    console.log("message button clicked");
    this.router.navigate(['message'], { relativeTo: this.route });
  }

  viewMessage() {
    console.log("view message clicked");
    this.router.navigate(['viewMessage'], { relativeTo: this.route });
  }

  uploadPlan() {
    console.log("view message clicked");
    this.router.navigate(['uploadPlan'], { relativeTo: this.route });
  }

  mangeBatch() {
    console.log("manage batch clicked");
    this.router.navigate(['manageBatches'], { relativeTo: this.route });
  }

  changePassword() {
    console.log("change password clicked");
    this.router.navigate(['changePassword'], { relativeTo: this.route });
  }

  logOut() {
    sessionStorage.setItem("loggedInUser", null)
    this.router.navigate(['../homepage'], { relativeTo: this.route });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
