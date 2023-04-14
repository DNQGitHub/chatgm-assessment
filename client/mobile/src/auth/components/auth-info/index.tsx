import React from 'react';
import { Text, View } from 'native-base';
import { selectAuth } from '@auth/redux/slices';
import { useSelector } from 'react-redux';

export const AuthInfo = () => {
    const auth = useSelector(selectAuth);

    if (auth)
        return (
            <View padding={'12px'} borderWidth={1} borderRadius={8}>
                <Text>{JSON.stringify(auth, null, 4)}</Text>
            </View>
        );

    return null;
};
