import React from 'react';

const Key = ({ value, onClick }) => <button type="button" className="key" value={value} onClick={onClick}>{value}</button>;

export default Key;
