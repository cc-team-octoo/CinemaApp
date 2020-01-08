import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyledForm, StyledFormContainer, StyledInput } from './Styled'

const validate = formValues => {
    const { username, email } = formValues;
    const errors = {};
    if (!username) {
        errors.username = 'Your name is required'
    } else if (username.length > 15 || username.length < 3) {
        errors.username = 'The name must have at least 3 characters and maximum 15'
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
    label,
    type,
    meta: { touched, error }
    }) => (
    <div>
        <label>{label}</label>
        <div>
        <StyledInput {...input} placeholder={label} type={type} autoComplete="off"/>
        {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const ReservationForm = props => {
    const { handleSubmit, pristine, submitting } = props
    const onSubmit = formValues => console.log(formValues)
    return (
        <StyledFormContainer>
            <h2>Reservation form</h2>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
                />
                <Field 
                    name="email" 
                    type="email" 
                    component={renderField} 
                    label="Email" />
                <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                </div>
            </StyledForm>
      </StyledFormContainer>
    )
  }

export default reduxForm ({
    form: 'reservationForm',
    validate
})(ReservationForm);