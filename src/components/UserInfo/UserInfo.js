import React from 'react';
import PropTypes from 'prop-types';
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
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    // read cookies for session.
    // if necessary query the server for the user info to show
    return;
  }


  onClick() {
    this.props.logout();
  }

  render() {
    const { isLogged } = this.props;
    return (
      <div onClick={this.onClick}>
        {isLogged ? <LoggedUser/> : <UnloggedUser/>}
      </div>
    );
  }
}

UserInfo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserInfo;
