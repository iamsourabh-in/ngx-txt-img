import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgxTxtImgComponent } from './modules/mgx-txt-img/mgx-txt-img.component';
import { NgxTxtImgComponent } from './ngx-txt-img/ngx-txt-img.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MgxTxtImgComponent, NgxTxtImgComponent]
})
export class NgxTxtImgModule { }
