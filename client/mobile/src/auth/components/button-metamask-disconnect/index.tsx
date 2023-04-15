import React from 'react';
import { Button, IButtonProps, Text } from 'native-base';
import { useMetamaskContext } from '@auth/contexts';

export const ButtonMetamaskDisconnect = (props: IButtonProps) => {
    const { onPress } = props;
    const { handleDisconnect } = useMetamaskContext();

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
