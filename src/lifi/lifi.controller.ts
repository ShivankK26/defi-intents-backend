import { Controller, Get } from '@nestjs/common';
import { LifiService } from './lifi.service';

@Controller('lifi')
export class LifiController {
    constructor(private readonly lifiService: LifiService) {}

    @Get('chains')
    async getAvailableChains() {
        return await this.lifiService.getAvailableChains();
    }

    @Get('bridges')
    async getAvailableBridges() {
        return await this.lifiService.getAvailableBridges();
    }
}
