import { Redirect } from 'react-router';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import login from './login.png';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  inputChange(event) {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({error: !this.props.logged});
  }

  render() {
    if (this.props.logged) {
      return <Redirect to="/"/>;
    }
    const {t} = this.props;

    return (
      <div className="Login">
        <h1 className="title">{t('login:caption')}</h1>
        <div className="box">
          <img className="profile-img" src={login} alt="User" />
          <form className="form-signin" onSubmit={(event) => this.submitLogin(event)}>
            <div className="error">{((this.state.error) ? t(`login:error.form`) : '')}</div>
            <input type="email" className="form-control"
              placeholder={t('login:email_placeholder')} required
              name="email" value={this.state.email}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="password" className="form-control"
              placeholder={t('login:password_placeholder')} required
              name="password" value={this.state.password}
              onChange={(ev) => this.inputChange(ev)} />
            <button className="submit" type="submit">{t('login:login_button')}</button>
            <div className="moreinfo">
              <label className="rememberme">
                <input type="checkbox" value="ricordami"/> {t('login:rememberme')}
              </label>
              <a href="#" className="help">{t('login:help')}</a>
            </div>
          </form>
        </div>
        <a href="#" className="register">{t('login:register')}</a>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('login')(Login);
