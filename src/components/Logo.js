import React from 'react';
import PropTypes from 'prop-types';
import logo from '../icons/knots_logo.svg'

function Logo ({width, height, title, className}) {
  return (
    <img
      className={className}
      src={logo}
      alt="Knots logo"
      title={title}
      width={width}
      height={height}
    />
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
};

Logo.defaultPropTypes = {
  width: 100,
  height: 100,
};

export default Logo;
