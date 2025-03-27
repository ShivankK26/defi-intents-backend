import { Module } from '@nestjs/common';
import { EnsoController } from './enso.controller';
import { EnsoService } from './enso.service';

@Module({
  controllers: [EnsoController],
  providers: [EnsoService]
})
export class EnsoModule {}
