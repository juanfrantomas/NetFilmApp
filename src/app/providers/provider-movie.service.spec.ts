import { TestBed } from '@angular/core/testing';

import { ProviderMovieService } from './provider-movie.service';

describe('ProviderMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProviderMovieService = TestBed.get(ProviderMovieService);
    expect(service).toBeTruthy();
  });
});
