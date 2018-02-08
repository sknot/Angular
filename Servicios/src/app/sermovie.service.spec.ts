import { TestBed, inject } from '@angular/core/testing';

import { SermovieService } from './sermovie.service';

describe('SermovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SermovieService]
    });
  });

  it('should be created', inject([SermovieService], (service: SermovieService) => {
    expect(service).toBeTruthy();
  }));
});
