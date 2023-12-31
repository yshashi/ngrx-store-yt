/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductApiService } from './product-api.service';

describe('Service: ProductApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApiService]
    });
  });

  it('should ...', inject([ProductApiService], (service: ProductApiService) => {
    expect(service).toBeTruthy();
  }));
});
