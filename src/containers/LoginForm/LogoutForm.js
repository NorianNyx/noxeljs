import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

export default class LogoutForm extends Component {
    render () {
        return (
            <Form
                onSubmit={this.props.handleLogout}>
                <Button
                    bsStyle="danger"
                    type="submit">
                    Logout</Button>
            </Form>
        )
    }
}

LogoutForm.propTypes = {
    handleLogout: PropTypes.func.isRequired
}