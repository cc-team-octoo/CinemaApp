import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, StyledFormContainer, StyledInput, StyledError, StyledButton, StyledInfo } from './Styled'


const validate = formValues => {
    const { username, email } = formValues;
    const errors = {};
    if (!username) {
        errors.username = 'Your name is required'
    } else if (username.length > 15) {
        errors.username = 'The name can have max 15 characters'
    }
    if (!email) {
        errors.email = 'Your email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderField = ({
    input,
    type,
    label,
    meta: { touched, error }
    }) => (
    <div>
        <StyledInput {...input} placeholder={label} type={type} autoComplete='off' />
        {touched && error && <StyledError>{error}</StyledError>}
    </div>
)

class ReservationForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <StyledFormContainer>
                <h2>Reservation form</h2>
                <StyledInfo>To make a reservation, please enter your name and email address so we can send you a confirmation message with all the further details</StyledInfo>
                <StyledForm onSubmit={handleSubmit(this.props.onFormSubmit)}>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="username"
                    />
                    <Field 
                        name="email" 
                        type="email" 
                        component={renderField} 
                        label="email" />
                    <StyledButton type="submit" disabled={pristine || submitting}>
                        Submit
                    </StyledButton>
                </StyledForm>
            </StyledFormContainer>
        )
    }
}

ReservationForm = reduxForm ({
    form: 'reservationForm',
    validate
})(ReservationForm);

export default ReservationForm;
