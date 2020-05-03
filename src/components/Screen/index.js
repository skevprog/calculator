import React from 'react';

const Screen = ({ input }) => (
  <div className="screen">
    <span className="result">{typeof input !== 'string' ? input.toString() : input}</span>
  </div>
);

export default Screen;
