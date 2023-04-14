import React from 'react';
import { Button, Modal, Text, View } from 'native-base';
import { useMetamaskContext, useWalletConnectContext } from '@auth/contexts';
import { useSelector } from 'react-redux';
import { selectAuth } from '@auth/redux';
import { AuthMethod } from '@auth/models';

export const ButtonConnectWallet = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const { handleConnect: handleMetamaskConnect, handleDisconnect: handleMetamaskDisconnect } = useMetamaskContext();
    const { handleConnect: handleWalletConnectConnect, handleDisconnect: handleWalletConnectDisconnect } =
        useWalletConnectContext();

    const auth = useSelector(selectAuth);

    if (auth && auth.method == AuthMethod.CONNECT_WALLETCONNECT) {
        return (
            <Button colorScheme={'gray'} onPress={handleWalletConnectDisconnect}>
                <Text color={'white'}>Disconnect</Text>
            </Button>
        );
    } else if (auth && auth.method == AuthMethod.CONNECT_METAMASK) {
        return (
            <Button colorScheme={'gray'} onPress={handleMetamaskDisconnect}>
                <Text color={'white'}>Disconnect</Text>
            </Button>
        );
    }

    return (
        <>
            <Button colorScheme={'gray'} onPress={() => setModalVisible(true)}>
                <Text color={'white'}>Connect</Text>
            </Button>

            <Modal isOpen={modalVisible} onClose={setModalVisible} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Connect Wallet</Modal.Header>
                    <Modal.Body>
                        <View style={{ gap: 12 }}>
                            <Button
                                colorScheme={'gray'}
                                onPress={() => {
                                    handleWalletConnectConnect();
                                    setModalVisible(false);
                                }}
                            >
                                <Text color={'white'}>Wallet Connect</Text>
                            </Button>

                            <Button
                                colorScheme={'gray'}
                                onPress={() => {
                                    handleMetamaskConnect();
                                    setModalVisible(false);
                                }}
                            >
                                <Text color={'white'}>Metamask</Text>
                            </Button>
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};
