import { PropsWithChildren } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Row, Column, Text, Button } from 'native-base';
import { SafeAreaView } from 'react-native';
import { ButtonConnect } from '../../../auth/components';

export const LayoutMain = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Row paddingX={'20px'} paddingY={'16px'} backgroundColor={'gray.400'} justifyContent={'space-between'}>
                <Text fontSize={'24px'} fontWeight={'bold'}>
                    Q's TODO
                </Text>

                <ButtonConnect />
            </Row>

            <Column flex={1}>{children}</Column>

            <StatusBar style="auto" translucent />
        </SafeAreaView>
    );
};
