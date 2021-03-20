import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AdminService } from 'src/app/admin.service';
import { ChallengerMonthlyLogs } from 'src/app/challenger-monthly-logs';
@Component({
  selector: 'app-view-charts',
  templateUrl: './view-charts.component.html',
  styleUrls: ['./view-charts.component.css']
})
export class ViewChartsComponent implements OnInit {
  data: any;
  labels: string[] = ['Biceps(in)', 'Chest(in)', 'ForeArms(in)', 'Height(cm)', 'Shoulders(in)', 'Thighs(in)', 'Waist(in)', 'Weight(Kgs)'];
  logs: ChallengerMonthlyLogs[];
  constructor(public router: Router, public route: ActivatedRoute, public service: AdminService) {
    console.log('constructor');
    var log1 = JSON.parse(sessionStorage.getItem("log1"));
    var log2 = JSON.parse(sessionStorage.getItem("log2"));
    var log3 = JSON.parse(sessionStorage.getItem("log3"));
    console.log(log3);
    console.log(log2);
    console.log(log3);

    if (log3 != null) {
      this.barChartData = [
        { data: [log1.biceps, log1.chest, log1.forearms, log1.height, log1.shoulder, log1.thighs, log1.waist, log1.weight], label: log1.month },
        { data: [log2.biceps, log2.chest, log2.forearms, log2.height, log2.shoulder, log2.thighs, log2.waist, log2.weight], label: log2.month },
        { data: [log3.biceps, log3.chest, log3.forearms, log3.height, log3.shoulder, log3.thighs, log3.waist, log3.weight], label: log3.month }
      ];
    } else if (log2 != null) {
      this.barChartData = [
        { data: [log1.biceps, log1.chest, log1.forearms, log1.height, log1.shoulder, log1.thighs, log1.waist, log1.weight], label: log1.month },
        { data: [log2.biceps, log2.chest, log2.forearms, log2.height, log2.shoulder, log2.thighs, log2.waist, log2.weight], label: log2.month }
      ];
    } else if (log1 != null) {
      this.barChartData = [
        { data: [log1.biceps, log1.chest, log1.forearms, log1.height, log1.shoulder, log1.thighs, log1.waist, log1.weight], label: log1.month }
      ];
    } else {
      alert("No Data")
      this.router.navigate(['../cards'], { relativeTo: this.route });
    }

  }
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = this.labels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = null;

  ngOnInit(): void {
    console.log("oninit");

    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
  }
}
