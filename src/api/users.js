export default class ApiUsers {
    static validateAuthentication(action) {
        return new Promise(resolve => {
            let isAuthenticated = false
            if (action.username.toLowerCase() === 'hello' && action.password.toLowerCase() === 'world') {
                isAuthenticated = true
            }
            resolve(isAuthenticated)
        })
    }
}