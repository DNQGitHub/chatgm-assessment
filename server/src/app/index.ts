import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@prisma';
import { TrackingModule } from '@tracking';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), TrackingModule, PrismaModule],
})
export class AppModule {}
