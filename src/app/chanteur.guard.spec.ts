import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { chanteurGuard } from './chanteur.guard';

describe('chanteurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => chanteurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
