import React from 'react'
import { browserHistory } from 'react-router'

import AuthActions from '../../action/auth'

export default class LoginForm extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        email:'',
        password:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onReturnLogin = this.onReturnLogin.bind(this);
  }
  //Function pour update l'ui ou changer de page en fonction du login
  onReturnLogin(code){
    switch (code) {
      case 200:
        browserHistory.push('/app/main')
        break;
      case 404:
          alert("Utilisateur ou mdp inconnu");
        break
      default:

    }
  }

  handleChange(event) {
    if(event.target.name == "email"){
      this.setState({email: event.target.value});
    }
    else{
      this.setState({password: event.target.value});
    }
  }

  handleSubmit(){
    AuthActions.login({email:this.state.email,password:this.state.password},this.onReturnLogin)
  }


  render() {
    return (
      <div className="login">
        <div className="loginLogo">
        </div>
        <div className="form">
          <div className="loginRow">
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} className="loginInput" placeholder="Identifiant"/>
          </div>
          <div className="loginRow">
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="loginInput" placeholder="Password"/>
          </div>
          <div>
            <button className="buttonSubmit" onClick={this.handleSubmit}> Connexion </button>
          </div>
        </div>
      </div>
    );
  }
}
