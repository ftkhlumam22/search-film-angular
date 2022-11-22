import { TestBed } from '@angular/core/testing';

import { GetFilmService } from './get-film.service';

describe('GetFilmService', () => {
  let service: GetFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
