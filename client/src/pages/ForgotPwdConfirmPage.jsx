import React from 'react'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'
import { Button, ButtonWrapper, FormWrapper, AuthHr } from '../globalStyle'
import Logo from '../components/nav/Logo'
import Alert from '../components/utils/Alert'
import { Link } from 'react-router-dom'

const ForgotPwdSubmittedPage = () => {
  return (
    <AuthPageTemplate>
      <FormWrapper>
        <Logo large />
        <h2>Восстановление доступа</h2>
        <Alert message='Ваш запрос был отправлен! Пожалуйста, проверьте свою электронную почту и перейдите по ссылке в письме, чтобы создать новый пароль.' />
        <ButtonWrapper>
          <Link to='/reset-password'>
            <Button type='button' dark>Сбросить пароль</Button>
          </Link>
          <AuthHr><span>или</span></AuthHr>
          <Link to='/'>
            <Button>На главную</Button>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </AuthPageTemplate>
  )
}

export default ForgotPwdSubmittedPage