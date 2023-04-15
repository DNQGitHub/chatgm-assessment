import React from 'react';
import { Button, IButtonProps, Text } from 'native-base';
import { useWalletConnectContext } from '@auth/contexts';

export const ButtonWalletConnectDisconnect = (props: IButtonProps) => {
    const { onPress } = props;
    const { handleDisconnect } = useWalletConnectContext();

    return (
        <Button
            colorScheme={'gray'}
            shadow={'5'}
            onPress={(e) => {
                handleDisconnect();
                onPress?.(e);
            }}
        >
            <Text color={'white'}>Disconnect</Text>
        </Button>
    );
};
