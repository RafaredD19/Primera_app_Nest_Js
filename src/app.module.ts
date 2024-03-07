import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsModule } from './modules/tuits/tuits.module';

@Module({
  imports: [TuitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
