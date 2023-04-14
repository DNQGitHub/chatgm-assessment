import { Module } from '@nestjs/common';
import { TrackingController } from './controllers';
import { TrackingService } from './services';

@Module({
    controllers: [TrackingController],
    providers: [TrackingService],
})
export class TrackingModule {}
