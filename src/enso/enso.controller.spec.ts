import { Test, TestingModule } from '@nestjs/testing';
import { EnsoController } from './enso.controller';

describe('EnsoController', () => {
  let controller: EnsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnsoController],
    }).compile();

    controller = module.get<EnsoController>(EnsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
