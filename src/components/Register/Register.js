import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      passwd1: '',
      passwd2: ''
    };
  }

  inputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  submitRegister(event) {
    event.preventDefault();
    this.props.register(this.state);
  }

  render() {
    const clsError = {};
    if (this.props.error.details) {
      for (const k of this.props.error.details) {
        clsError[k.field] = k.error;
      }
    }

    return (
      <div className="Register">
        <h1 className="title">Inserisci i tuoi dati per registrarti</h1>
        <div className="box">
          <form className="form-signin" onSubmit={(event) => this.submitRegister(event)}>
            <div className="error">{this.props.error.text}</div>
            <input type="text" placeholder="Inserisci il tuo nome" required
              className={'form-control ' + (clsError.first_name ? 'form-error' : '')}
              name="first_name" value={this.state.first_name}
              onChange={(ev) => this.inputChange(ev)} />
            <div className={'error-message ' + (clsError.first_name ? 'show' : 'hidden')}>
              {clsError.first_name}
            </div>
            <input type="text" placeholder="Inserisci il tuo cognome" required
              className={'form-control ' + (clsError.last_name ? 'form-error' : '')}
              name="last_name" value={this.state.last_name}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="email" placeholder="Inserisci la tua email" required
              className={'form-control ' + (clsError.email ? 'form-error' : '')}
              name="email" value={this.state.email}
              onChange={(ev) => this.inputChange(ev)} />
            <div className={'error-message ' + (clsError.email ? 'show' : 'hidden')}>
              {clsError.email}
            </div>
            <input type="password" placeholder="Inserisci la tua password" required
              className={'form-control ' + (clsError.password ? 'form-error' : '')}
              name="passwd1" value={this.state.passwd1}
              onChange={(ev) => this.inputChange(ev)} />
            <input type="password" placeholder="Riscrivi la tua password" required
              className={'form-control ' + (clsError.password ? 'form-error' : '')}
              name="passwd2" value={this.state.passwd2}
              onChange={(ev) => this.inputChange(ev)} />
            <button className="submit" type="submit">Registrati</button>
            <div className="moreinfo">
              <a href="#" className="help">Bisogno di aiuto?</a>
            </div>
          </form>
        </div>
        <a href="#" className="login">Accedi al tuo account</a>
      </div>
    );
  }
}

Register.propTypes = {
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
};

export default Register;
