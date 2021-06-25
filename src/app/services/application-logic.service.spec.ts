import { TestBed } from '@angular/core/testing';

import { ApplicationLogicService } from './application-logic.service';

describe('ApplicationLogicService', () => {
  let service: ApplicationLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
