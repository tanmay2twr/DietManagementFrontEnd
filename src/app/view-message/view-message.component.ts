import { Component, OnInit } from '@angular/core';
import { ChallengerService } from 'src/app/challenger.service';
import { Message } from '../message';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/message-dialog/message-dialog.component';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
  messages: Message[];
  sentBy: string;

  constructor(public service: ChallengerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    var email = loggedInUser.username;
    this.service.viewMessage(email).subscribe(data => {
      this.messages = data;
      console.log(data);
      var loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
      this.sentBy = loggedInUser.username;
    })
  }

  openDialog(name, email) {
    console.log("open dialog clicked");
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '250px',
      data: { fullname: name, sentTo: email, sentBy: this.sentBy }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteMessage(id) {
    this.service.deleteMessage(id).subscribe(data => {
      alert("Message Deleted");
      this.ngOnInit();
    });
  }

}
