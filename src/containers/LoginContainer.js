import { connect } from 'react-redux';
import {
    fetchLogin,
    logged,
} from '../modules/login';

import Login from '../components/Login';


const mapDispatchToProps = {
  login: (email, password) => fetchLogin(email, password)
};

const mapStateToProps = (state) => {
  return {
    logged: logged(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
