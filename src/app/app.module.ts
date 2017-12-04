import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTxtImgModule } from './modules/ngx-txt-img/ngx-txt-img.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxTxtImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
