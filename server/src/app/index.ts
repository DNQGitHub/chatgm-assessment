import { Module } from '@nestjs/common';
import { PrismaModule } from '@prisma';
import { TrackingModule } from '@tracking';

@Module({
    imports: [TrackingModule, PrismaModule],
})
export class AppModule {}
