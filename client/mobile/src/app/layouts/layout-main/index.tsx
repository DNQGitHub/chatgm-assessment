import { PropsWithChildren } from 'react';
import { Row, Column, Text } from 'native-base';
import { SafeAreaView, StatusBar } from 'react-native';
import { ButtonConnectWallet } from '@auth/components';
import { ConnectWalletProvider } from '@auth/contexts/connect-wallet-context/provider';

export const LayoutMain = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Row paddingX={'20px'} paddingY={'16px'} backgroundColor={'gray.400'} justifyContent={'space-between'}>
                <Text fontSize={'24px'} fontWeight={'bold'}>
                    Q's TODO
                </Text>

                <ConnectWalletProvider>
                    <ButtonConnectWallet />
                </ConnectWalletProvider>
            </Row>

            <Column flex={1}>{children}</Column>

            <StatusBar translucent />
        </SafeAreaView>
    );
};
