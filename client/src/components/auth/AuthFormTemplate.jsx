import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { FormWrapper, ButtonWrapper, Button, AuthHr } from '../../globalStyle'
import Logo from '../nav/Logo'

class AuthFormTemplate extends Component {
  render() {
    const { title, alert, onSubmit, fields, forgotpass, button1, button2, linkto, white} = this.props;
    return (
      <FormWrapper>
        <Logo largeLogo light/>
        <h2>{title}</h2>
        <p>Войдите в систему или создайте новую учетную запись</p>
        {alert}
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
          {fields}
          {forgotpass}
          <ButtonWrapper>
            <Button type='submit' dark>{button1}</Button>
            <AuthHr white={white}><span>или</span></AuthHr>
            <Link to={linkto}>
              <Button>{button2}</Button>
            </Link>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    )
  }
}

// FORM VALIDATION
const validate = ({ email, password, passwordConfirm, name }) => {
  const errors = {};
  const emailCheck = value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  console.log( password, passwordConfirm, name)
  if (!email) {
    errors.email = 'Введите ваш email';
  } else if (emailCheck(email)) {
    errors.email = 'Введите правильный email';
  }
  if (!name) errors.name = 'Введите ваше имя';
  if (!password) errors.password = 'Введите пароль';
  else if (password.length < 8 ) errors.password = 'Длина пароля должна быть не менее 8 символов';
  if (!passwordConfirm) errors.passwordConfirm = 'Повторите пароль';
  if (password !== passwordConfirm) errors.passwordConfirm = 'Пароли должны совпадать'

  return errors;
}

// CONFIGURE REDUX-FORM
export default reduxForm({
  form: 'authForm',
  validate
})(AuthFormTemplate);