import { Test, TestingModule } from '@nestjs/testing';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

describe('TuitsController', () => {
  let controller: TuitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuitsController],
      providers: [TuitsService],
    }).compile();

    controller = module.get<TuitsController>(TuitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
