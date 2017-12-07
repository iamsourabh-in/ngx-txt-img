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
    this.notify.success('This is long text to check what length can be the max f isuccess. his is long text to check what length can be the max f isuccess', false);
  }
  error() {
    this.notify.error('This is long text to check what length can be the max f isuccess. his is long text to check what length can be the max f isuccess', false);
  }
  warn() {
    this.notify.warn('This is long text to check what length can be the max f isuccess. his is long text to check what length can be the max f isuccess', false);
  }
  info() {
    this.notify.info('This is long text to check what length can be the max f isuccess. his is long text to check what length can be the max f isuccess', false);
  }
}
