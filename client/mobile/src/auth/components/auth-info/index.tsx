import React from 'react';
import { Text, View, Row, Column } from 'native-base';
import { selectAuth } from '@auth/redux/slices';
import { useSelector } from 'react-redux';

export const AuthInfo = () => {
    const auth = useSelector(selectAuth);

    if (auth)
        return (
            <View padding={'16px'} borderWidth={0} borderRadius={8} backgroundColor={'gray.100'} shadow={1}>
                <Column marginBottom={'8px'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color={'gray.700'}>
                        Method
                    </Text>
                    <Text fontSize={'14px'} color={'gray.500'}>
                        {auth.method || ''}
                    </Text>
                </Column>
                <Column marginBottom={'8px'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color={'gray.700'}>
                        Wallet Address
                    </Text>
                    <Text fontSize={'14px'} color={'gray.500'}>
                        {auth.walletAddress || ''}
                    </Text>
                </Column>
                <Column marginBottom={'8px'}>
                    <Text fontSize={'16px'} fontWeight={'600'} color={'gray.700'}>
                        Blockchain Network
                    </Text>
                    <Text fontSize={'14px'} color={'gray.500'}>
                        {auth.blockchainNetwork || ''}
                    </Text>
                </Column>
                {/* <Text>{JSON.stringify(auth, null, 4)}</Text> */}
            </View>
        );

    return null;
};
