/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeocodeService } from './geocode.service';

describe('Service: Geocode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodeService]
    });
  });

  it('should ...', inject([GeocodeService], (service: GeocodeService) => {
    expect(service).toBeTruthy();
  }));
});
