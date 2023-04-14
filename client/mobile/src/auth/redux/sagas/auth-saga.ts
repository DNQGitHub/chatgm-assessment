import { takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from '@auth/redux';
import { AuthModel } from '@auth/models';
import { apiClient } from '@api';

function* handleOnAuthSucceded({ payload, type }: PayloadAction<{ auth: AuthModel }>) {
    console.log('authSaga | handleOnAuthSucceded', { payload });
    try {
        const { auth } = payload;

        yield call([apiClient, apiClient.post], '/tracking/connect-wallet-events', {
            wallet_address: auth.walletAddress,
            blockchain_network: auth.blockchainNetwork,
        });
    } catch (error) {
        console.log('authSaga | handleOnAuthSucceded | error', { error });
    }
}

export function* authSaga() {
    yield takeLatest(authActions.authSucceeded, handleOnAuthSucceded);
}
