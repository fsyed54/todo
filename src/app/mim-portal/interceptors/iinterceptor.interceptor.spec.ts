import { TestBed } from '@angular/core/testing';

import { IinterceptorInterceptor } from './iinterceptor.interceptor';

describe('IinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IinterceptorInterceptor = TestBed.inject(IinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
