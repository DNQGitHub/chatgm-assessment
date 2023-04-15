import React from 'react';
import { Button, IButtonProps, Text } from 'native-base';
import { useMetamaskContext } from '@auth/contexts';

export const ButtonMetamaskConnect = (props: IButtonProps) => {
    const { onPress } = props;
    const { handleConnect } = useMetamaskContext();

    return (
        <Button
            colorScheme={'gray'}
            shadow={'5'}
            onPress={(e) => {
                handleConnect();
                onPress?.(e);
            }}
        >
            <Text color={'white'}>Metamask</Text>
        </Button>
    );
};
