import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import {
    logged,
    fetchLogout
} from '../modules/login';


const mapDispatchToProps = {
  logout: () => fetchLogout(),
};

const mapStatetoProps = state => ({
  isLogged: logged(state),
});

export default connect(mapStatetoProps, mapDispatchToProps)(UserInfo);
