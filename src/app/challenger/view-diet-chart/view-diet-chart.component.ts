import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/challenger.service';
import { DietPlanFile } from 'src/app/diet-plan-file';
import * as fileSaver from 'file-saver';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-diet-chart',
  templateUrl: './view-diet-chart.component.html',
  styleUrls: ['./view-diet-chart.component.css']
})
export class ViewDietChartComponent implements OnInit {
  files: DietPlanFile[];
  constructor(public service: ChallengerService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
  }
  download(id, fileName) {
    var file = fileName;
    this.service.downloadFile(id).subscribe(data => {
      let blob: any = new Blob([data], { type: "application/octet-stream" });
      const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, file);
    }), error => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }
}