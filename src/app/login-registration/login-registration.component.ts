import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgModule } from '@angular/core'
import { ChallengerRegistration } from '../challenger-registration'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  user = new User();
  challengerRegistration = new ChallengerRegistration();
  height_feet: number;
  height_inch: number;
  weight: number;
  bmi: number;
  title = 'Online Diet';
  title1 = 'Management System';
  response: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private _service: RegistrationService, private service: LoginService) { }

  registerUser() {
    this.challengerRegistration.height = ((this.height_inch * 0.08333333 + this.height_feet * 1) * 30.48);
    this.challengerRegistration.weight = this.weight;
    this.challengerRegistration.bmi = (this.weight / ((((this.height_inch * 0.08333333) + (this.height_feet * 1)) * 30.48 / 100) * (((this.height_inch * 0.08333333) + (this.height_feet * 1)) * 30.48 / 100)));
    console.log(this.challengerRegistration.bmi);
    this._service.registerUserFromRemote(this.challengerRegistration).subscribe(
      data => console.log("respose recieved"),
      error => console.log("exception occured")
    )
  }

  //access api with token
  public accessDashboard(data) {
    //console.log(data);
    if (data === 'admin') {
      this.router.navigate(['/admindashboard']);
      console.log(data);
    } else if (data === 'challenger') {
      this.router.navigate(['/challengerdashboard']);
    } else if (data === 'mentor') {
      console.log(data);
      this.router.navigate(['/mentordashboard']);
    }
  }
  //method to generate token
  login(authRequest) {
    let resp = this.service.login(authRequest);
    resp.subscribe(data => {
      this.user = data;
      sessionStorage.setItem("loggedInUser", JSON.stringify({ name: this.user.name, username: this.user.username, batchMonth: this.user.batch_month, batchName: this.user.batch_name, batchStatus: this.user.batch_status, userRole: this.user.role, batchGroup: this.user.batch_group }))
      this.accessDashboard(this.user.role);
    });
  }

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    let authRequest = {
      "username": this.user.username,
      "password": this.user.password
    }
    this.login(authRequest);
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.showModal = false;
    }

  }
}
