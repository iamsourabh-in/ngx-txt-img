import { Component } from '@angular/core';
import { NgxNotifyService } from "./modules/ngx-notify/ngx-notify.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public notify: NgxNotifyService) {

  }
  title = 'app';
  success() {
    this.notify.success('This is a success notification', false);
  }
  error() {
    this.notify.error('This is an error notification', false);
  }
  warn() {
    this.notify.warn('This is a warning notification', false);
  }
  info() {
    this.notify.info('This is an Info notification', false);
  }
}
