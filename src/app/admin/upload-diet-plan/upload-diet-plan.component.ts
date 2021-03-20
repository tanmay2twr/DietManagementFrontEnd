import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-diet-plan',
  templateUrl: './upload-diet-plan.component.html',
  styleUrls: ['./upload-diet-plan.component.css']
})
export class UploadDietPlanComponent implements OnInit {
  batches: any;
  public dietPlanFile: any = File;
  batchName: any;
  batchGroup: any;
  constructor(public service: AdminService, public router: Router, public route: ActivatedRoute) { }
  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.service.getBatches().subscribe(data => {
      this.batches = data;
    })
  }

  onSelectFile(event) {
    const file = event.target.files[0];
    this.dietPlanFile = file;
  }
  uploadFile(batchName, batchGroup) {
    const formData = new FormData();
    let batchDetails = {
      "batchName": batchName,
      "batchGroup": batchGroup
    }
    formData.append('batchDetails', JSON.stringify(batchDetails));
    formData.append('file', this.dietPlanFile);
    this.service.uploadFile(formData).subscribe(data => {
      console.log(data);
      alert("File Uploaded")
    });
  }
}