import React from 'react'
import LoginForm from '../widget/LoginForm'
import LoginPresentation from '../widget/LoginPresentation'

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <LoginForm></LoginForm>
        <LoginPresentation></LoginPresentation>
      </div>
    );
  }
}
