import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(service: TvShowService) {
  throw new Error('Function not implemented.');
}

