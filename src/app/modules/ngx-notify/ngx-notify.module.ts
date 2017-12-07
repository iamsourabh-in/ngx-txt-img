import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxNotifyComponent } from './ngx-notify.component';
import { NgxNotifyService } from "./ngx-notify.service";
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '**', component: NgxNotifyComponent }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  declarations: [NgxNotifyComponent],
  exports: [NgxNotifyComponent],
  providers: [NgxNotifyService]
})
export class NgxNotifyModule { }
