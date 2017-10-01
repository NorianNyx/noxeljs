import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

import UsernameField from '../../components/Header/NavBar/LoginForm/UsernameField'
import PasswordField from '../../components/Header/NavBar/LoginForm/PasswordField'

class LoginForm extends Component {
    render () {
        return (
            <Form onSubmit={this.props.handleLogin}>
                <Field name="username" component={UsernameField} />
                {' '}
                <Field name="password" component={PasswordField} />
                {' '}
                <Button
                    bsStyle="primary"
                    type="submit"
                    disabled={this.props.invalid}>
                    Login</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    invalid: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool,
    handleLogin: PropTypes.func.isRequired
}

LoginForm.defaultProps = {
    isAuthenticated: false
}

export default reduxForm({
    form: 'login',
    validate: (values) => {
        const errors = {}
        if (!values.username) {
            errors.username = 'Username is required'
        }
        if (!values.password) {
            errors.password = 'Password is required'
        }
        return errors
    }
})(LoginForm)