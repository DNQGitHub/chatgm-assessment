import { useConnectWalletContext } from '@auth/contexts';
import { ConnectMetamaskProvider } from '@auth/contexts/connect-metamask-context/provider';
import { Button, Modal, Text, View } from 'native-base';
import { ButtonConnectMetamask } from '../button-connect-metamask';

export const ButtonConnectWallet = () => {
    const { modalVisible, handleSetModalVisible } = useConnectWalletContext();

    return (
        <>
            <Button colorScheme={'gray'} onPress={() => handleSetModalVisible(true)}>
                <Text color={'white'}>Connect</Text>
            </Button>

            <Modal isOpen={modalVisible} onClose={handleSetModalVisible} colorScheme={'gray'}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Connect Wallet</Modal.Header>
                    <Modal.Body>
                        <View style={{ gap: 12 }}>
                            <Button colorScheme={'gray'}>
                                <Text color={'white'}>Wallet Connect</Text>
                            </Button>

                            <ConnectMetamaskProvider>
                                <ButtonConnectMetamask />
                            </ConnectMetamaskProvider>
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    );
};
