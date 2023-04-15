import { all, call } from 'redux-saga/effects';
import authSaga from '@auth/redux/sagas/auth-saga';

export default function* appSaga() {
    yield all([call(authSaga)]);
}
