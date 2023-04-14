import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsJSON } from 'class-validator';

export class AddConnectWalletEventDto {
    @IsString()
    @IsNotEmpty()
    wallet_address: string;

    @IsString()
    @IsNotEmpty()
    blockchain_network: string;
}
