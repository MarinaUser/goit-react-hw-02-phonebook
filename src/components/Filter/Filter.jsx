import React from 'react';
import PropTypes from 'prop-types';


export const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={onChange}
        type="text"
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

