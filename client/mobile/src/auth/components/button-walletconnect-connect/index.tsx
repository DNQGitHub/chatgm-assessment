import React from 'react';
import { Button, IButtonProps, Text } from 'native-base';
import { useWalletConnectContext } from '@auth/contexts';

export const ButtonWalletConnectConnect = (props: IButtonProps) => {
    const { onPress } = props;
    const { handleConnect } = useWalletConnectContext();

    return (
        <Button
            colorScheme={'gray'}
            shadow={'5'}
            onPress={(e) => {
                handleConnect();
                onPress?.(e);
            }}
        >
            <Text color={'white'}>WalletConnect</Text>
        </Button>
    );
};
