import { TestBed } from '@angular/core/testing';

import { ServicesService } from './services.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ServicesService]
  }));

  it('should be created', () => {
    const service: ServicesService = TestBed.get(ServicesService);
    expect(service).toBeTruthy();
  });
});
