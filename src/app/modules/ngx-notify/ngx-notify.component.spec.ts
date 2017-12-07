import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotifyComponent } from './ngx-notify.component';

describe('NgxNotifyComponent', () => {
  let component: NgxNotifyComponent;
  let fixture: ComponentFixture<NgxNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
