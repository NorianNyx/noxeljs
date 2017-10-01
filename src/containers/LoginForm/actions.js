/**
 * LoginForm Actions
 * 
 * Actions are the only way we interact
 * with our application state. They are called
 * from containers.
 */

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
 * Dispatch that the user is requesting a login
 * 
 * @param {object} value The value to be passed to the reducer
 * @return {object} An action with the type of LOGIN_REQUEST passing payload
 */
export const loginRequest = (value) => {
    return { type: LOGIN_REQUEST, payload: value }
}

/**
 * Dispatch that the user has successfully logged in
 *
 * @param {object} value The value to be passed to the reducer
 * @return {object} An action with the type of LOGIN_SUCCESS passing payload
 */
export const loginSuccess = (value) => {
    return { type: LOGIN_SUCCESS, payload: value }
}

/**
 * Dispatch that the user's login has failed
 * 
 * @return {object} An action with the type of LOGIN_FAILED
 */
export const loginFailed = () => {
    return { type: LOGIN_FAILED }
}

/**
 * Dispatch that the user has requested a logout
 * 
 * @return {object} An action with the type of LOGOUT_REQUEST
 */
export const logoutRequest = () => {
    return { type: LOGOUT_REQUEST }
}

/**
 * Dispatch that the user has logged out successfully
 * 
 */
export const logoutSuccess = () => {
    return { type: LOGOUT_SUCCESS }
}