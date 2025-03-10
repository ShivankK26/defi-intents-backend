import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LifiModule } from './lifi/lifi.module';
import { LifiController } from './lifi/lifi.controller';
import { EnsoModule } from './enso/enso.module';

@Module({
  imports: [LifiModule, EnsoModule],
  controllers: [AppController, LifiController],
  providers: [AppService],
})
export class AppModule {}
