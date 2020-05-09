import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Key = React.memo((props) => {
  const [animateButton, setAnimateButton] = useState(0);

  const {
    value, onClick, disabled, className,
  } = props;

  const check = (e) => {
    setAnimateButton(1);
    onClick(e);
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className={`key ${className}`}
      value={value}
      onClick={check}
      onAnimationEnd={() => setAnimateButton(0)}
      scale={animateButton}
    >
      {value}
    </button>
  );
});

Key.defaultProps = {
  value: '',
  onClick: undefined,
  disabled: false,
  className: '',
};

Key.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Key;
