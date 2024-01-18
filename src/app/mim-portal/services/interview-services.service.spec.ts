import { TestBed } from '@angular/core/testing';

import { InterviewServicesService } from './interview-services.service';

describe('InterviewServicesService', () => {
  let service: InterviewServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
