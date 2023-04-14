import React from 'react';
import { Button, Modal, Text, View } from 'native-base';
import { useMetamaskContext } from '@auth/contexts';

export const ButtonConnectWallet = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const { handleConnect: handleConnectMetamask } = useMetamaskContext();

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

                            <Button colorScheme={'gray'} onPress={handleConnectMetamask}>
                                <Text color={'white'}>Metamask</Text>
                            </Button>
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};
