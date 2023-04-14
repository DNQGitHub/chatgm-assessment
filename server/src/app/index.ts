import { Module } from '@nestjs/common';
import { TrackingModule } from '@tracking';

@Module({
    imports: [TrackingModule],
})
export class AppModule {}
