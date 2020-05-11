import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

const Screen = ({ input }) => (
  <div className="screen transparent-background">
    <span className="result">{input}</span>
  </div>
);

Screen.defaultProps = {
  input: '',
};

Screen.propTypes = { input: PropTypes.string };

export default Screen;
