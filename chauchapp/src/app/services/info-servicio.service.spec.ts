import { TestBed } from '@angular/core/testing';

import { InfoServicioService } from './info-servicio.service';

describe('InfoServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoServicioService = TestBed.get(InfoServicioService);
    expect(service).toBeTruthy();
  });
});
