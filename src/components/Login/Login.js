import React from 'react';
import PropTypes from 'prop-types';

import login from './login.png';
import './Login.css';

const Login = (props) => (
  <div className="Login">
    <h1 className="title">Inserisci i tuoi dati per il login</h1>
    <div className="box">
      <img className="profile-img" src={login} alt="" />
      <form className="form-signin" action="#">
        <div className="error">{(props.error) ? props.error : ''}</div>
        <input type="text" className="form-control"
          placeholder="Inserisci la tua email" required />
        <input type="password" className="form-control"
          placeholder="Inserisci la tua password" required />
        <button className="submit" type="button">Accedi</button>
        <label className="ricordami">
          <input type="checkbox" value="ricordami"/>Ricordami
        </label>
        <a href="#" className="help">Bisogno di aiuto?</a>
        <span className="clearfix"></span>
      </form>
    </div>
    <a href="#" className="registrati">Registrati</a>
  </div>
);

Login.propTypes = {
  error: PropTypes.string.isRequired
};

export default Login;
