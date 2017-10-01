import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './constants'
import { loginSuccess, loginFailed, logoutSuccess } from './actions'

import ApiUsers from '../../api/users'

export function* logIn(action) {
    const isAuthenticated = yield call(ApiUsers.validateAuthentication, action.payload)
    if (isAuthenticated) {
        yield put(loginSuccess(isAuthenticated))
    } else {
        yield put(loginFailed())
    }
}

export function* logOut() {
    yield put(logoutSuccess())
}

export default function* rootSaga() {
    yield takeLatest(LOGIN_REQUEST, logIn)
    yield takeLatest(LOGOUT_REQUEST, logOut)
}