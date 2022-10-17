import { TestBed } from '@angular/core/testing';

import { GlokAbasService } from './glok-abas.service';

describe('RavexAbasService', () => {
  let service: GlokAbasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlokAbasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
