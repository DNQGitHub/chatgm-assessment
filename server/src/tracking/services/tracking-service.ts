import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/services';
import { AddConnectWalletEventDto } from '@tracking/dtos';

@Injectable({})
export class TrackingService {
    constructor(private prismaService: PrismaService) {}

    async addConnectWalletEvent(dto: AddConnectWalletEventDto) {
        const addedEvent = await this.prismaService.trackingEvent.create({
            data: {
                action: 'connect-wallet',
                data: {
                    ...dto,
                },
            },
        });

        return addedEvent;
    }
}
