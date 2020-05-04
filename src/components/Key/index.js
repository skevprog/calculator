import React from 'react';

const Key = ({ value, onClick, disabled, className }) => <button disabled={disabled} type="button" className={`key ${className}`} value={value} onClick={onClick}>{value}</button>;

Key.defaultProps = {
  value: 'test',
  onClick: undefined,
  disabled: false,
  className: '',
};

export default Key;
