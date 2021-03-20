import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { LoginRegistrationComponent } from './login-registration/login-registration.component'
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MentorPortalComponent } from './mentor/mentor-portal/mentor-portal.component';
import { ChallengerDashBoardComponent } from './challenger/challenger-dash-board/challenger-dash-board.component';
import { AdminRequestsComponent } from './admin/admin-requests/admin-requests.component';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { ViewAllChallengersComponent } from './admin/view-all-challengers/view-all-challengers.component';
import { ViewMonthlyLogsComponent } from './admin/view-monthly-logs/view-monthly-logs.component';
import { UpdateMonthlyChartComponent } from './challenger/update-monthly-chart/update-monthly-chart.component';
import { MessageComponent } from './admin/message/message.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { DailyLogsComponent } from './admin/daily-logs/daily-logs.component';
import { UpdateDailyLogsComponent } from './challenger/update-daily-logs/update-daily-logs.component';
import { UploadDietPlanComponent } from './admin/upload-diet-plan/upload-diet-plan.component';
import { BatchDetailsComponent } from './admin/batch-details/batch-details.component';
import { DownloadDietChartComponent } from './challenger/download-diet-chart/download-diet-chart.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewChartsComponent } from './admin/view-charts/view-charts.component';
import { CardsComponent } from './cards/cards.component';



const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: LoginRegistrationComponent },

  {
    path: 'admindashboard', component: AdminDashboardComponent,
    children: [
      { path: 'viewRequests', component: AdminRequestsComponent },
      { path: 'adminSearch', component: AdminSearchComponent },
      { path: 'viewChallengers', component: ViewAllChallengersComponent },
      { path: 'viewMonthlyLogs/:email', component: ViewMonthlyLogsComponent },
      { path: 'message', component: MessageComponent },
      { path: 'viewMessage', component: ViewMessageComponent },
      { path: 'viewDailyLogs/:email', component: DailyLogsComponent },
      { path: 'uploadPlan', component: UploadDietPlanComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'manageBatches', component: BatchDetailsComponent },
      { path: 'viewCharts', component: ViewChartsComponent },
      { path: 'cards', component: CardsComponent }
    ],
  },
  {
    path: 'mentordashboard', component: MentorPortalComponent,
    children: [
      { path: 'message', component: MessageComponent },
      { path: 'viewMessage', component: ViewMessageComponent },
      { path: 'viewChallengers', component: ViewAllChallengersComponent },
      { path: 'viewMonthlyLogs/:email', component: ViewMonthlyLogsComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'viewDailyLogs/:email', component: DailyLogsComponent },
      { path: 'viewCharts', component: ViewChartsComponent },
      { path: 'cards', component: CardsComponent }
    ]
  },
  {
    path: 'challengerdashboard', component: ChallengerDashBoardComponent,
    children: [
      { path: 'updateMonthlyLog', component: UpdateMonthlyChartComponent },
      { path: 'viewMessage', component: ViewMessageComponent },
      { path: 'message', component: MessageComponent },
      { path: 'updateDailyLogs', component: UpdateDailyLogsComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'viewDietChart', component: DownloadDietChartComponent },
      { path: 'cards', component: CardsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
