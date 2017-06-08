import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.css';
import { withRouter } from 'react-router';


class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      user: this.defaultUser
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() { this.updateUserData(this.props); }

  // Use componentWillReceiveProps to avoid an useless render in between
  componentWillReceiveProps(nextProps) { this.updateUserData(nextProps); }

  get defaultUser() {
    return {
      first_name: 'User'
    };
  }
  /**
   * Update the state `user` and `logged` properties if one of them
   * changed in the current props.
   * A check is done to prevent infinite loop.
   */
  updateUserData(props) {
    const { isLogged, user: propsUser } = props;
    const { logged, user } = this.state;

    if (isLogged !== logged || propsUser !== user) {
      // safecheck for failed user info fetch. if We are logged we need to show
      // something to the user, so we can use the previous/default state's user
      const userData = propsUser ? propsUser : user;
      // safecheck for failed user info fetch or null user in props.
      // If we have something (and it's different from current state) we store
      // that, else we store the defaultUser to avoid attribute errors.
      const userData = propsUser ? propsUser : this.defaultUser;
      this.setState({
        logged: isLogged,
        user: userData
      });
    }
  }

  logout() { this.props.logout(); }

  render() {
    const { logged } = this.state;

    if (logged) {
      // extract the first name property to be rendered
      // This is done here to prevent the `Cannot read property of null` error
      // if this.state.user == null
      const { user: { first_name } } = this.state;
      return (
        <div className='wrapper'>
          <p>Hi, {first_name}!</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }

    return (
      <div className='wrapper'>
        <button><Link to='/login'>Login</Link></button>
      </div>
    );
  }
}

UserInfo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default withRouter(UserInfo);
