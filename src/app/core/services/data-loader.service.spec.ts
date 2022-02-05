import { TestBed } from '@angular/core/testing';

import { DataLoader } from './data-loader.service';

describe('DataLoaderService', () => {
  let service: DataLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
