import { Module } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { TuitsController } from './tuits.controller';

@Module({
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
