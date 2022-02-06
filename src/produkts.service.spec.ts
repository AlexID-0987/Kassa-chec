import { TestBed } from '@angular/core/testing';

import { ProduktsService } from './produkts.service';

describe('ProduktsService', () => {
  let service: ProduktsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduktsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
