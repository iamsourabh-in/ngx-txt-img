import { Component, OnInit } from '@angular/core';
import { NgxNotifyService } from './ngx-notify.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NotificationType } from './ngx-notificationType';

@Component({
  selector: 'ngx-notify',
  templateUrl: './ngx-notify.component.html',
  styleUrls: ['./ngx-notify.component.css'],
  animations: [
    trigger('notificationState', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(-80%)',
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(50%)',
      })),
      transition('* => active', animate('.8s')),
      transition('inactive <=> active', animate('.8s')),
    ])
  ]
})
export class NgxNotifyComponent implements OnInit {
  allAlerts: IAlert[] = [];
  alert: IAlert;
  // state = 'inactive';
  isSuccess = false;
  isWarning = false;
  isInfo = false;
  isError = false;
  mainRawHTML = '';

  constructor(public notify: NgxNotifyService) { }

  ngOnInit() {
    this.notify.getMessage().subscribe(alert => {
      if (alert) {
        this.alert = alert;
        this.alert.state = 'active';
        this.allAlerts.push(JSON.parse(JSON.stringify(this.alert)));

        if (this.alert != null && this.alert.type == NotificationType.success) {

          this.isSuccess = true;
          this.isWarning = false;
          this.isInfo = false;
          this.isError = false;
        }
        if (this.alert != null && this.alert.type == NotificationType.info) {
          this.isSuccess = false;
          this.isWarning = false;
          this.isInfo = true;
          this.isError = false;
        }
        if (this.alert != null && this.alert.type == NotificationType.warn) {
          this.isSuccess = false;
          this.isWarning = true;
          this.isInfo = false;
          this.isError = false;
        }
        if (this.alert != null && this.alert.type == NotificationType.error) {
          this.isSuccess = false;
          this.isWarning = false;
          this.isInfo = false;
          this.isError = true;
        }
        //this.toggleState();
      }
    });

  }

  close(al: any) {
    console.log(al);
    al.state = 'inactive';
    setTimeout(() => {
      let indxOF = this.allAlerts.indexOf(al);
      this.allAlerts.splice(indxOF, 1);
    }, 1000);
    // this.toggleState();
  }

  toggleState() {
    //   this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}


interface IAlert {
  type: NotificationType,
  text: string
  state: string;
}
