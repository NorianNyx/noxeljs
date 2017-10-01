/**
 * LoginForm Constants
 * 
 * Always keep a central location for our constants.
 * We use them in reducers and actions, so to keep things
 * clean and to avoid weird typos, we define them here and
 * import them where we need them.
 * 
 * To avoid two actions accidentally having the same name,
 * prefix our type with 'projectname/ContainerName/TYPE_NAME
 * 
 * Example: export const MY_TYPE = 'myproject/MyContainer/MY_TYPE
 */

export const LOGIN_REQUEST = 'noxeljs/LoginForm/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'noxeljs/LoginForm/LOGIN_SUCCESS'
export const LOGIN_FAILED = 'noxeljs/LoginForm/LOGIN_FAILED'
export const LOGOUT_REQUEST = 'noxeljs/LoginForm/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'noxeljs/LoginForm/LOGOUT_SUCCESS'