import { useMetamaskContext } from '@auth/contexts';
import { Button, Text } from 'native-base';

export const ButtonConnectMetamask = () => {
    const { handleConnect } = useMetamaskContext();

    console.log('ButtonConnectMetamask', { handleConnect });

    return (
        <Button colorScheme={'gray'} onPress={handleConnect}>
            <Text color={'white'}>Metamask</Text>
        </Button>
    );
};
