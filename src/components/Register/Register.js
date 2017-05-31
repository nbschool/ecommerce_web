import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password1: '',
      password2: ''
    };
  }

  inputChange(event) {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  submitRegister(event) {
    event.preventDefault();
    this.props.register(this.state);
  }

  render() {
    const {t} = this.props;

    const clsError = {};
    if (this.props.error.details) {
      for (const k of this.props.error.details) {
        clsError[k.field] = t(`register:error.${k.error}`);
      }
    }

    return (
      <div className="Register">
        <h1 className="title">{t('register:caption')}</h1>
        <div className="box">
          <form className="form-signin" onSubmit={(event) => this.submitRegister(event)}>
            <div className="error">
              {((this.props.error.details) ? t(`register:error.form`) : '')}
            </div>
            <input type="text" placeholder={t('register:first_name_placeholder')} required
              className={'form-control ' + (clsError.first_name ? 'form-error' : '')}
              name="first_name" value={this.state.first_name}
              onChange={(ev) => this.inputChange(ev)} />
            <div className={'error-message ' + (clsError.first_name ? 'show' : 'hidden')}>
              {clsError.first_name}
            </div>
            <input type="text" placeholder={t('register:last_name_placeholder')} required
              className={'form-control ' + (clsError.last_name ? 'form-error' : '')}
              name="last_name" value={this.state.last_name}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="email" placeholder={t('register:email_placeholder')} required
              className={'form-control ' + (clsError.email ? 'form-error' : '')}
              name="email" value={this.state.email}
              onChange={(ev) => this.inputChange(ev)} />
            <div className={'error-message ' + (clsError.email ? 'show' : 'hidden')}>
              {clsError.email}
            </div>
            <input type="password" placeholder={t('register:password1_placeholder')} required
              className={'form-control ' + (clsError.password ? 'form-error' : '')}
              name="password1" value={this.state.password1}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="password" placeholder={t('register:password2_placeholder')} required
              className={'form-control ' + (clsError.password ? 'form-error' : '')}
              name="password2" value={this.state.password2}
              onChange={(ev) => this.inputChange(ev)} />
            <button className="submit" type="submit">{t('register:register_button')}</button>
            <div className="moreinfo">
              <a href="#" className="help">{t('register:help')}</a>
            </div>
          </form>
        </div>
        <a href="#" className="login">{t('register:login')}</a>
      </div>
    );
  }
}

Register.propTypes = {
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default translate('register')(Register);
