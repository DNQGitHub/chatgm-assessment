import { Body, Controller, Post } from '@nestjs/common';
import { AddConnectWalletEventDto } from '@tracking/dtos';
import { TrackingService } from '@tracking/services';

@Controller('tracking')
export class TrackingController {
    constructor(private trackingService: TrackingService) {}

    @Post('connect-wallet-events')
    addConnectWalletEvent(@Body() dto: AddConnectWalletEventDto) {
        return this.trackingService.addConnectWalletEvent(dto);
    }
}
