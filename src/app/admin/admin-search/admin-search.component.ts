import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { User } from '../../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  constructor(private service: AdminService, public router: Router, public route: ActivatedRoute) { }
  users: User[];
  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.service.returnAllUsers().subscribe(data => this.users = data)
  }
  searchText;

  deleteUser(email) {
    this.service.deleteUser(email).subscribe(data => {
      alert(email);
      this.ngOnInit();
    });
  }

}
