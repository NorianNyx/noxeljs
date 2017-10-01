import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl } from 'react-bootstrap'

const UsernameField = (props) => {
    return (
        <FormGroup
            validationState={props.meta.touched ?
                (props.meta.error ?
                    'error' :
                    'success') :
                null}>
            <FormControl {...props.input} id="username" type="text"
                placeholder="Username" />
        </FormGroup>
    )
}

UsernameField.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
}

export default UsernameField