import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecetaService } from './Receta.service';

describe('Service: Receta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [RecetaService]
    });
  });

  it('should be created', inject([RecetaService], (service: RecetaService) => {
    expect(service).toBeTruthy();
  }));
});


