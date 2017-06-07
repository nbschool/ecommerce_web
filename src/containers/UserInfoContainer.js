import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import {
    logged,
    fetchLogout,
    getUserAtts,
} from '../modules/login';


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(fetchLogout()),
});

const mapStatetoProps = state => ({
  isLogged: logged(state),
  user: getUserAtts(state)
});

export default connect(mapStatetoProps, mapDispatchToProps)(UserInfo);
