import React from 'react';
import { Button, Modal, Text, View } from 'native-base';
import { useSelector } from 'react-redux';
import { selectAuth } from '@auth/redux';
import { AuthMethod } from '@auth/models';
import { ButtonWalletConnectDisconnect } from '../button-walletconnect-disconnect';
import { ButtonMetamaskDisconnect } from '../button-metamask-disconnect';
import { ButtonWalletConnectConnect } from '../button-walletconnect-connect';
import { ButtonMetamaskConnect } from '../button-metamask-connect';

export const ButtonConnectWallet = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const auth = useSelector(selectAuth);

    if (auth && auth.method == AuthMethod.CONNECT_WALLETCONNECT) {
        return <ButtonWalletConnectDisconnect />;
    } else if (auth && auth.method == AuthMethod.CONNECT_METAMASK) {
        return <ButtonMetamaskDisconnect />;
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
                            <ButtonWalletConnectConnect
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            />

                            <ButtonMetamaskConnect
                                colorScheme={'gray'}
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            />
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};
