import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../message-dialog/message-dialog.component';
import { User } from 'src/app/user';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BatchDetailsComponent } from '../batch-details/batch-details.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  sentBy: string;
  sendersRole: string;
  batches: BatchDetailsComponent[];
  constructor(public dialog: MatDialog, public service: AdminService, public router: Router, public route: ActivatedRoute) { }
  users: User[];
  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (loggedInUser == null) {
      this.router.navigate(['../../homepage'], { relativeTo: this.route });
    }
    this.sendersRole = loggedInUser.userRole;
    this.service.returnAllUsers().subscribe(data => this.users = data)
    this.service.getBatches().subscribe(data => {
      this.batches = data;
    })
    this.sentBy = loggedInUser.username;
  }
  openDiaolog(name, email) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '250px',
      data: { fullname: name, sentTo: email, sentBy: this.sentBy }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
