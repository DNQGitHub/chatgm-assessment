import apiClient from './client';
import { AddConnectWalletEventDto } from './dtos';

export const addConnectWalletEvent = async (dto: AddConnectWalletEventDto) => {
    return await apiClient.post('/tracking/connect-wallet-events', {
        wallet_address: dto.walletAddress,
        blockchain_network: dto.blockchainNetwork,
    });
};
