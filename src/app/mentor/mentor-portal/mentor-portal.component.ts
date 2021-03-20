import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentor-portal',
  templateUrl: './mentor-portal.component.html',
  styleUrls: ['./mentor-portal.component.css']
})
export class MentorPortalComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
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

  viewChallengers() {
    console.log("view challengers button clicked");
    this.router.navigate(['viewChallengers'], { relativeTo: this.route });
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
