import { Component, OnInit } from '@angular/core';
import { DietPlanFile } from 'src/app/diet-plan-file';
import * as fileSaver from 'file-saver';
import { ChallengerService } from 'src/app/challenger.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-download-diet-chart',
  templateUrl: './download-diet-chart.component.html',
  styleUrls: ['./download-diet-chart.component.css']
})
export class DownloadDietChartComponent implements OnInit {
  files: DietPlanFile[];
  constructor(public service: ChallengerService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    var username = loggedInUser.username;
    this.service.getFiles(username).subscribe(data => {
      this.files = data;
    })
  }
  download(id, fileName) {
    this.service.downloadFile(id).subscribe(data => {
      let blob: any = new Blob([data], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, fileName);
    }), error => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }
}
