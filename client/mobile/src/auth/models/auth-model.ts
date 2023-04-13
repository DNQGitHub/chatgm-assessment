export enum AuthMethod {
    CONNECT_WALLETCONNECT,
    CONNECT_METAMASK,
}

export type AuthModel = {
    method?: AuthMethod;
    walletAddress?: string;
    blockchainNetwork?: string;
};
