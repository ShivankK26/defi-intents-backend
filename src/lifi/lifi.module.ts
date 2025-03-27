import { Module } from '@nestjs/common';
import { LifiController } from './lifi.controller';
import { LifiService } from './lifi.service';

@Module({
  controllers: [LifiController],
  providers: [LifiService],
  exports: [LifiService]
})
export class LifiModule {}
