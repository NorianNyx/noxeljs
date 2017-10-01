import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import loginFormReducer from './containers/LoginForm/reducer'
import loginFormPlugin from './containers/LoginForm/plugin'

export const reducers = combineReducers({
    routes: routerReducer,
    form: formReducer.plugin({
        login: loginFormPlugin
    }),
    login: loginFormReducer
})