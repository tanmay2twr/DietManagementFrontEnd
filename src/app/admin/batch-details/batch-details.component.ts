import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { User } from 'src/app/user';
import { BatchDetails } from 'src/app/batch-details';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  mentors: any;
  batches: BatchDetailsComponent[];
  mentorsList: User[];
  names: string[];
  batchId: string;
  constructor(public service: AdminService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.mentors = new FormControl();
    this.service.getBatches().subscribe(data => {
      this.batches = data;
    })
    this.service.getMentors().subscribe(data => {
      this.mentorsList = data;
    })
  }

  selected(name, batch: string) {
    this.names = name;
    this.batchId = batch;
  }

  update() {
    const formData = new FormData();
    this.names.forEach(element => {
      formData.set('batchId', this.batchId);
      formData.set('name', element);
      this.service.assignMentor(formData).subscribe(data => {
        console.log(data);
      })
    })
    this.batches = null
    this.mentorsList = null;
    alert("Details Updated")
    this.ngOnInit();
  }
}