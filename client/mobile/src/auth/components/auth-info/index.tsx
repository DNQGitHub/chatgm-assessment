import React from 'react';
import { Text } from 'native-base';
import { selectAuth } from '@auth/redux';
import { useSelector } from 'react-redux';

export const AuthInfo = () => {
    const auth = useSelector(selectAuth);

    if (auth) return <Text>{JSON.stringify(auth, null, 4)}</Text>;

    return null;
};
