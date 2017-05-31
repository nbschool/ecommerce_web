import { connect } from 'react-redux';
import {
    error,
    fetchLogin,
    logged,
} from '../modules/login';

import Login from '../components/Login';


const mapDispatchToProps = {
  login: (email, password) => fetchLogin(email, password)
};

const mapStateToProps = (state) => {
  return {
    error: error(state),
    logged: logged(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
