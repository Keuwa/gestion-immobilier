import React from 'react'
import AuthActions from '../../action/auth'

export default class LoginForm extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        email:'',
        password:''
      }
  }
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
            <button className="buttonSubmit" onClick={AuthActions.login}> Connexion </button>
          </div>
        </div>
      </div>
    );
  }
}
