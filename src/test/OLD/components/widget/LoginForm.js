import React from 'react'
import Auth from '../../services/AuthService'

export default class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: ''
    };
  }
  login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log("Error logging in", err);
      });
}
  render() {
    return (
        <form role="form">
        <div className="form-group">
          <input type="text" valueLink={this.linkState('user')}placeholder="Username" />
          <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
    /*return (
      <div className="login">
        <div className="loginLogo">
        </div>
        <div className="form">
          <div className="loginRow">
          <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"></path>
          </svg>
            <input type="text" className="loginInput" placeholder="Identifiant"/>
          </div>
          <div className="loginRow">
          <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"></path>
          </svg>
            <input type="password" className="loginInput" placeholder="Password"/>
          </div>
          <div>
            <button className="buttonSubmit" onClick={this.connect}> Connexion </button>
          </div>
        </div>
      </div>
    );*/
  }
}
