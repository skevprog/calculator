import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ input }) => (
  <div className="screen">
    <span className="result">{input}</span>
  </div>
);

Screen.defaultProps = {
  input: '',
};

Screen.propTypes = { input: PropTypes.string };

export default Screen;
