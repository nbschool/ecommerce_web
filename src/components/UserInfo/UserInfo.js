import React from 'react';
import PropTypes from 'prop-types';

const LoggedUser = () => (<p>Logged!</p>);
const UnloggedUser = () => (<p>Not Logged!</p>);

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
