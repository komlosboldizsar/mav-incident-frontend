/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendtomapService } from './sendtomap.service';

describe('Service: Sendtomap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendtomapService]
    });
  });

  it('should ...', inject([SendtomapService], (service: SendtomapService) => {
    expect(service).toBeTruthy();
  }));
});
