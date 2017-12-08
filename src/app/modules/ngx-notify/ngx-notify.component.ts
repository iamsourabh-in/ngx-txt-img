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
        transform: 'translateY(-50%)',
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
 

  constructor(public notify: NgxNotifyService) { }

  ngOnInit() {
    this.notify.getMessage().subscribe(alert => {
      if (alert) {
        this.alert = alert;
        this.alert.state = 'active';
        let temp = JSON.parse(JSON.stringify(this.alert))
        this.allAlerts.push(temp);
        setTimeout(() => {
          this.close(temp);
        }, 3000);
        
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
