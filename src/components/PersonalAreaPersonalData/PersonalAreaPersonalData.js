import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './PersonalAreaPersonalData.css';

class PersonalAreaPersonalData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: props.personalData.first_name,
      last_name: props.personalData.last_name,
      email: props.personalData.email
    };
  }

  submitData(event) {
    event.preventDefault();
    this.props.saveData(this.state);
  }

  render() {
    const {t} = this.props;

    return (
      <section className="PersonalAreaPersonalData">
        <h1>{t('personalArea:dataArea')}</h1>
        <form className="form" onSubmit={(event) => this.submitData(event)}>
          <div>
            <label>{t('personalArea:dataArea_first_name')}</label>
            <input className="form-control" type="text" value={this.state.first_name} />
          </div>
          <div>
            <label>{t('personalArea:dataArea_last_name')}</label>
            <input className="form-control" type="text" value={this.state.last_name} />
          </div>
          <div>
            <label>{t('personalArea:dataArea_email')}</label>
            <input className="form-control" type="email" value={this.state.email} />
          </div>
          <div>
            <label></label>
            <input type="submit" value={t('personalArea:dataArea_save')} />
          </div>
        </form>
      </section>
    );
  }
}

PersonalAreaPersonalData.propTypes = {
  personalData: PropTypes.object.isRequired,
  saveData: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('login')(PersonalAreaPersonalData);
