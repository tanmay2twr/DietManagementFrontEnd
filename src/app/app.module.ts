import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { ChallengerDashBoardComponent } from './challenger/challenger-dash-board/challenger-dash-board.component';
import { AdminRequestsComponent } from './admin/admin-requests/admin-requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MentorPortalComponent } from './mentor/mentor-portal/mentor-portal.component';
import { ViewMonthlyLogsComponent } from './admin/view-monthly-logs/view-monthly-logs.component';
import { ViewAllChallengersComponent } from './admin/view-all-challengers/view-all-challengers.component';
import { UpdateMonthlyChartComponent } from './challenger/update-monthly-chart/update-monthly-chart.component';
import { MessageComponent } from './admin/message/message.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ViewMessageComponent } from './view-message/view-message.component';
import { DailyLogsComponent } from './admin/daily-logs/daily-logs.component';
import { UpdateDailyLogsComponent } from './challenger/update-daily-logs/update-daily-logs.component';
import { UploadDietPlanComponent } from './admin/upload-diet-plan/upload-diet-plan.component';
import { DownloadDietChartComponent } from './challenger/download-diet-chart/download-diet-chart.component';
import { ViewDietChartComponent } from './challenger/view-diet-chart/view-diet-chart.component';
import { BatchDetailsComponent } from './admin/batch-details/batch-details.component';
import { MatSelectModule } from '@angular/material/select';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChartsModule } from 'ng2-charts';
import { ViewChartsComponent } from './admin/view-charts/view-charts.component';
import { CardsComponent } from './cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginRegistrationComponent,
    ChallengerDashBoardComponent,
    AdminRequestsComponent,
    AdminSearchComponent,
    MentorPortalComponent,
    ViewMonthlyLogsComponent,
    ViewAllChallengersComponent,
    UpdateMonthlyChartComponent,
    MessageComponent,
    MessageDialogComponent,
    ViewMessageComponent,
    DailyLogsComponent,
    UpdateDailyLogsComponent,
    UploadDietPlanComponent,
    DownloadDietChartComponent,
    ViewDietChartComponent,
    BatchDetailsComponent,
    ChangePasswordComponent,
    ViewChartsComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatIconModule,
    Ng2SearchPipeModule,
    NgMatSearchBarModule,
    MatDialogModule,
    MatSidenavModule,
    CommonModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    ChartsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
