import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public service: LoginService, public router: Router, public route: ActivatedRoute) { }
  user = new User;
  newPassword: string;
  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    this.user.username = loggedInUser.username;
  }
  changePassword: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    changePassword: new FormControl('', [Validators.required, Validators.min(3)])
  });
  hide1 = true;
  hide = true;
  get passwordInput() { return this.changePassword.get('password'); }
  get changePasswordInput() { return this.changePassword.get('changePassword'); }
  changepassword() {
    console.log(this.passwordInput.value);

    if (this.passwordInput.value == this.changePasswordInput.value) {
      this.user.password = this.passwordInput.value;
      this.service.changePassword(this.user).subscribe(data => {
        alert("Password Changed");
        this.router.navigate(['../../homepage'], { relativeTo: this.route });
      })
    } else {
      alert("Passwords Do not Match")
    }
  }

}
