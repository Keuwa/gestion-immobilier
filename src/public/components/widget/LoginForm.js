import React from 'react'

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="loginLogo">
        </div>
        <div className="form">
          <div className="loginRow">
            <input type="text" className="loginInput" placeholder="Identifiant"/>
          </div>
          <div className="loginRow">
            <input type="password" className="loginInput" placeholder="Password"/>
          </div>
          <div>
            <button className="buttonSubmit"> Connexion </button>
          </div>
        </div>
      </div>
    );
  }
}
