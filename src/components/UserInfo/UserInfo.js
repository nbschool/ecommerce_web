import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './button.css';

/**
 * Generic button component to handle user inputs.
 */
const Button = props => {
  const { className, onClick, children } = props;
  const clsName = `button ${className}`;

  return (
    <button onClick={onClick} className={clsName}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};


class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      user: {
        first_name: 'User'
      }
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() { this.updateUserData(); }

  componentDidUpdate() {
    const { user: propsUser } = this.props;

    this.updateUserData();

    // Update the local user data if the state.user is not the same as the
    // one received from props (i.e. the username changed)
    if (propsUser !== this.state.user) {
      this.setState({ user: propsUser });
    }
  }

  updateUserData() {
    const { isLogged } = this.props;

    if (isLogged !== this.state.logged) {
      this.setState({ logged: isLogged });
    }
  }

  logout() { this.props.logout(); }

  render() {
    const { logged } = this.state;
    const { user: { first_name: firstName } } = this.state;

    return (
      logged
          ? <Button onClick={this.logout}>Hi, {firstName}! Logout</Button>
          : <Button><Link to='/login'>Login</Link></Button>
    );
  }
}

UserInfo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default UserInfo;
