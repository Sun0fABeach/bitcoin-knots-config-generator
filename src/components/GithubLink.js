import React from 'react';
import icon from '../icons/github.svg'

function GithubLink ({className}) {
  return (
    <a
      className={className}
      href='https://github.com/Sun0fABeach/bitcoin-knots-config-generator'
      target='_blank'
    >
      <img
        src={icon}
        alt='github link'
        title='Source repository'
        width='35'
        height='35'
      />
    </a>
  );
}

export default GithubLink;
