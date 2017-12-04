import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTxtImgComponent } from './ngx-txt-img.component';

describe('NgxTxtImgComponent', () => {
  let component: NgxTxtImgComponent;
  let fixture: ComponentFixture<NgxTxtImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTxtImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTxtImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
