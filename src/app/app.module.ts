import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTxtImgModule } from './modules/ngx-txt-img/ngx-txt-img.module';
import { AppComponent } from './app.component';
import { NgxNotifyModule } from "./modules/ngx-notify/ngx-notify.module";
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxTxtImgModule, NgxNotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
