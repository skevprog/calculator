import React from 'react';

const Screen = ({ input }) => (
  <div className="screen">
    <span className="result">{typeof input === 'string' ? input : input.toString()}</span>
  </div>
);

export default Screen;
