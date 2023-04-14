import { Controller, Post } from '@nestjs/common';
import { TrackingService } from '@tracking/services';

@Controller('tracking')
export class TrackingController {
    constructor(private trackingService: TrackingService) {}

    @Post('events')
    trackEvent() {
        return 'tracking events';
    }
}
