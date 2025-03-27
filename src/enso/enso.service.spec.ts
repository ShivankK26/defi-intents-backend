import { Test, TestingModule } from '@nestjs/testing';
import { EnsoService } from './enso.service';

describe('EnsoService', () => {
  let service: EnsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnsoService],
    }).compile();

    service = module.get<EnsoService>(EnsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
