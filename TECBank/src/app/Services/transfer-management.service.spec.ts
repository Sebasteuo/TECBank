import { TestBed } from '@angular/core/testing';

import { TransferManagementService } from './transfer-management.service';

describe('TransferManagementService', () => {
  let service: TransferManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
