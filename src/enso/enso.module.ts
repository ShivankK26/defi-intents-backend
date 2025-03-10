import { Module } from '@nestjs/common';
import { EnsoController } from './enso.controller';

@Module({
  controllers: [EnsoController]
})
export class EnsoModule {}
