import React, { Component } from 'react';
import PropTypes from 'prop-types';

import login from './login.png';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwd: ''
    };
  }

  inputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state);
  }


  render() {
    return (
      <div className="Login">
        <h1 className="title">Inserisci i tuoi dati per il login</h1>
        <div className="box">
          <img className="profile-img" src={login} alt="" />
          <form className="form-signin" onSubmit={(event) => this.submitLogin(event)}>
            <div className="error">{this.props.error}</div>
            <input type="email" className="form-control"
              placeholder="Inserisci la tua email" required
              name="email" value={this.state.email}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="password" className="form-control"
              placeholder="Inserisci la tua password" required
              name="passwd" value={this.state.passwd}
              onChange={(ev) => this.inputChange(ev)} />
            <button className="submit" type="submit">Accedi</button>
            <div className="moreinfo">
              <label className="ricordami">
                <input type="checkbox" value="ricordami"/> Ricordami
              </label>
              <a href="#" className="help">Bisogno di aiuto?</a>
            </div>
          </form>
        </div>
        <a href="#" className="registrati">Registrati</a>
      </div>
    );
  }
}

Login.propTypes = {
  error: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
