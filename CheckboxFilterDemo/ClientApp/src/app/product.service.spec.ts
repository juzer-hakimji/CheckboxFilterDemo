import { TestBed } from '@angular/core/testing';

import { MultiCheckboxService } from './multi-checkbox.service';

describe('MultiCheckboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiCheckboxService = TestBed.get(MultiCheckboxService);
    expect(service).toBeTruthy();
  });
});
