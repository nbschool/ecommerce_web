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
      username: 'User'
    };

    this.logout = this.logout.bind(this);
  }

  componentWillMount() { this.fetchUserData(); }

  componentDidMount() { this.fetchUserData(); }

  fetchUserData() {
    if (this.props.isLogged) {
      // TODO: When available implement the fetch action to get the user
      // info from a /me endpoint on the server, such as the user name or
      // the whole resource
      return;
    }
  }

  logout() { this.props.logout(); }

  render() {
    const { isLogged } = this.props;
    const { username } = this.state;


    return (
      <div>
        {isLogged
          ? <Button onClick={this.logout}>Hi, {username}!</Button>
          : <Button><Link to='/login'>Login</Link></Button>
        }
      </div>
    );
  }
}

UserInfo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserInfo;
