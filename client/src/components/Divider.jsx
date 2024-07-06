import React from 'react';
import './Divider.scss';

const Divider = ({ bottomStyle, divStyle, topStyle }) => (
  <div className="divider" style={divStyle}>
    {topStyle && (
      <svg className="svg-divider" style={topStyle}>
        <path d="M 0 0 L 3000 200 L 3000 0" />
      </svg>
    )}
    {bottomStyle && (
      <svg className="svg-divider" style={bottomStyle}>
        <path d="M 0 0 L 3000 200 L 0 200" />
      </svg>
    )}

  </div>
);

export default Divider;


