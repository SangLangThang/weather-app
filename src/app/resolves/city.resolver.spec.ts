import { TestBed } from '@angular/core/testing';

import { CityResolver } from './city.resolver';

describe('CityResolver', () => {
  let resolver: CityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
