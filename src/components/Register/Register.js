import React from 'react';
import PropTypes from 'prop-types';

import './Register.css';

const Register = (props) => {
  const clsError = {};
  if (props.error.details) {
    for (const k of props.error.details) {
      clsError[k.field] = k.error;
    }
  }

  return (
    <div className="Register">
      <h1 className="title">Inserisci i tuoi dati per registrarti</h1>
      <div className="box">
        <form className="form-signin" action="#">
          <div className="error">{props.error.text}</div>
          <input type="text" placeholder="Inserisci il tuo nome" required
            className={'form-control ' + (clsError.first_name ? 'form-error' : '')} />
          <div className={'error-message ' + (clsError.first_name ? 'show' : 'hidden')}>
            {clsError.first_name}
          </div>
          <input type="text" placeholder="Inserisci il tuo cognome" required
            className={'form-control ' + (clsError.last_name ? 'form-error' : '')} />
          <input type="email" placeholder="Inserisci la tua email" required
            className={'form-control ' + (clsError.email ? 'form-error' : '')} />
          <div className={'error-message ' + (clsError.email ? 'show' : 'hidden')}>
            {clsError.email}
          </div>
          <input type="password" placeholder="Inserisci la tua password" required
            className={'form-control ' + (clsError.password ? 'form-error' : '')} />
          <input type="password" placeholder="Riscrivi la tua password" required
            className={'form-control ' + (clsError.password ? 'form-error' : '')} />
          <button className="submit" type="button">Registrati</button>
          <a href="#" className="help">Bisogno di aiuto?</a>
          <span className="clearfix"></span>
        </form>
      </div>
      <a href="#" className="registrati">Accedi al tuo account</a>
    </div>
  );
};

Register.propTypes = {
  error: PropTypes.object.isRequired
};

export default Register;
