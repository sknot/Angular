import { TestBed, inject } from '@angular/core/testing';

import { MovieRemoteService } from './movie-remote.service';

describe('MovieRemoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieRemoteService]
    });
  });

  it('should be created', inject([MovieRemoteService], (service: MovieRemoteService) => {
    expect(service).toBeTruthy();
  }));
});
