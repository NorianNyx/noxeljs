
/**
 * Import Constants
 */
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from './constants'

/**
 * Action Handlers
 * 
 * Action handlers are used to execute state changes.
 * They are called by the reducer.
 */
const ACTION_HANDLERS = {
    [LOGIN_REQUEST]: (state) => {
        return { ...state, isAuthenticated: false }
    },
    [LOGIN_SUCCESS]: (state, action) => {
        return { ...state, isAuthenticated: action.payload }
    },
    [LOGIN_FAILED]: (state) => {
        return { ...state, isAuthenticated: false }
    },
    [LOGOUT_REQUEST]: (state) => {
        return { ...state, isAuthenticated: state.isAuthenticated }
    },
    [LOGOUT_SUCCESS]: (state) => {
        return { ...state, isAuthenticated: false }
    }
}

/**
 * LoginForm Reducer
 * 
 * The reducer is passed in an action and
 * calls the appropriate handler.
 */
const initialState = {
    isAuthenticated: false
}

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler
        ? handler(state, action)
        : state
}