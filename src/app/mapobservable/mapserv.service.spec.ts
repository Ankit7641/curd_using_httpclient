import { TestBed } from '@angular/core/testing';

import { MapservService } from './mapserv.service';

describe('MapservService', () => {
  let service: MapservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
