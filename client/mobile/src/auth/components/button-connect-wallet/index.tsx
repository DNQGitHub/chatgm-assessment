import React from 'react';
import { Button, Modal, Text, View } from 'native-base';
import { ButtonConnectMetamask } from '../button-connect-metamask';
import { useSelector } from 'react-redux';
import { selectAuth } from '@auth/redux';
import { useMetamaskContext } from '@auth/contexts';

export const ButtonConnectWallet = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const auth = useSelector(selectAuth);

    const { handleConnect } = useMetamaskContext();
    console.log('ButtonConnectWallet', { handleConnect });

    if (auth) {
        return (
            <Button>
                <Text color={'white'}>
                    {auth.blockchainNetwork} : {auth.walletAddress}
                </Text>
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
                            <Button colorScheme={'gray'}>
                                <Text color={'white'}>Wallet Connect</Text>
                            </Button>

                            <ButtonConnectMetamask />
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};
