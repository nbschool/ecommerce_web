import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import './UserInfo.css';

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

  logout() {
    this.props.logout()
    .then(() => this.props.history.push('/'));
  }

  render() {
    const { logged, user: { first_name } } = this.state;
    const { history } = this.props;

    if (logged) {
      // extract the first name property to be rendered
      // This is done here to prevent the `Cannot read property of null` error
      // if this.state.user == null
      return (
        <div className='wrapper'>
          <p>Hi, {first_name}!</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }

    return (
      <div className='wrapper'>
        <button onClick={() => history.push('/login/')}>Login</button>
      </div>
    );
  }
}

UserInfo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default withRouter(UserInfo);
