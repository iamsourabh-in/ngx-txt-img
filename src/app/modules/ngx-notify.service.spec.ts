import { TestBed, inject } from '@angular/core/testing';

import { NgxNotifyService } from './ngx-notify.service';

describe('NgxNotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxNotifyService]
    });
  });

  it('should be created', inject([NgxNotifyService], (service: NgxNotifyService) => {
    expect(service).toBeTruthy();
  }));
});
