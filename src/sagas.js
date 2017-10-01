import { all } from 'redux-saga/effects'
import LoginFormSaga from './containers/LoginForm/saga'

export default function* rootSaga() {
    yield all([
        LoginFormSaga()
    ])
}