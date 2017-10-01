/**
 * Import Constants
 */
import {
    LOGIN_FAILED
} from './constants'

/**
 * Action Handlers
 */
const ACTION_HANDLERS = {
    [LOGIN_FAILED]: (state) => {
        return {
            ...state,
            values: {
                ...state.values,
                password: undefined
            },
            fields: {
                ...state.fields,
                password: undefined
            }
        }
    }
}

/**
 * LoginFormPlugin Reducer
 * 
 * This reducer is used as a plugin to Redux Form.
 * These will be called when the LoginForm reducer
 * dispatches the appropriate action.
 */
export default (state = {}, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler
        ? handler(state, action)
        : state
}