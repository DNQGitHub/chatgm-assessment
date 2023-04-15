import { takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from '@auth/redux/slices';
import { AuthModel } from '@auth/models';
import { addConnectWalletEvent } from '@api/services';

function* handleOnAuthSucceded({ payload }: PayloadAction<{ auth: AuthModel }>) {
    console.log('authSaga | handleOnAuthSucceded', { payload });
    try {
        const { auth } = payload;

        yield call(addConnectWalletEvent, {
            walletAddress: auth.walletAddress!,
            blockchainNetwork: auth.blockchainNetwork!,
        });
    } catch (error) {
        console.log('authSaga | handleOnAuthSucceded | error', { error });
    }
}

export function* authSaga() {
    yield takeLatest(authActions.authSucceeded, handleOnAuthSucceded);
}
