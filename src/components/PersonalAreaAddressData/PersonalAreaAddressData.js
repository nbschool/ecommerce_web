import React from 'react';
import PropTypes from 'prop-types';

import './PersonalAreaAddressData.css';

const PersonalAreaAddressData = () => (
  <div className="PersonalAreaAddressData">
    <h3>Modifica i tuoi dati di spedizione</h3>
  </div>
);

PersonalAreaAddressData.propTypes = {
  t: PropTypes.func.isRequired,
};

export default PersonalAreaAddressData;
