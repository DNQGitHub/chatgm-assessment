import { all, call } from 'redux-saga/effects';
import { authSaga } from '@auth/redux/sagas';

export function* appSaga() {
    yield all([call(authSaga)]);
}
