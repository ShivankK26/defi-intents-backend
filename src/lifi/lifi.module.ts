import { Module } from '@nestjs/common';
import { LifiController } from './lifi.controller';

@Module({
  controllers: [LifiController],
})
export class LifiModule {}
