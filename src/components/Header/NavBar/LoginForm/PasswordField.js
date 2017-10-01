import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl } from 'react-bootstrap'

const PasswordField = (props) => {
    return (
        <FormGroup
            validationState={props.meta.touched ?
                (props.meta.error ?
                    'error' :
                    'success') :
                null}>
            <FormControl {...props.input} id="password" type="text"
                placeholder="Password" />
        </FormGroup>
    )
}

PasswordField.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
}

export default PasswordField