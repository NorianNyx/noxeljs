import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Navbar } from 'react-bootstrap'

import { loginRequest, logoutRequest } from './actions'

import LoginForm from './LoginForm'
import LogoutForm from './LogoutForm'

class LoginFormContainer extends Component {
    constructor(props) {
        super(props)

        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogin(e) {
        e.preventDefault()

        const loginObj = this.props.loginObj
        this.props.loginRequest(loginObj)

    }

    handleLogout(e) {
        e.preventDefault()

        this.props.logoutRequest()
    }

    render() {
        return (
            <Navbar.Form
                pullRight>
                {this.props.isAuthenticated
                    ?   <LogoutForm
                            handleLogout={this.handleLogout} />
                    :    <LoginForm
                            handleLogin={this.handleLogin} />}
            </Navbar.Form>
        )
    }
}

LoginFormContainer.propTypes = {
    loginRequest: PropTypes.func.isRequired,
    loginObj: PropTypes.object.isRequired,
    logoutRequest: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapDispatchToProps = {
    loginRequest: (loginObj) => loginRequest(loginObj),
    logoutRequest: () => logoutRequest()
}

const selector = formValueSelector('login')

const mapStateToProps = (state) => ({
    loginObj: {
        username: selector(state, 'username'),
        password: selector(state, 'password')
    },
    isAuthenticated: state.login.isAuthenticated
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)