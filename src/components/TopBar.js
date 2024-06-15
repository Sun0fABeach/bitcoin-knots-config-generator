import React from 'react';
import Logo from './Logo';
import github_icon from '../icons/github.svg'
import './TopBar.css';

const version = '26.x'

function TopBar () {
  return (
    <div className='mdl-layout__header'>
      <div className='mdl-layout__header-row top-bar'>
        <Logo className="header-logo" title="Bitcoin Knots" width={50} height={50} />
        <div className='mdl-layout-spacer' />
        <span className='mdl-layout-title title-long'>Bitcoin Knots Config Generator (compatible with Knots {version})</span>
        <span className='mdl-layout-title title-short'>Config Generator (Knots {version})</span>
        <div className='mdl-layout-spacer' />
        <a
          className="header-github-link"
          href="https://github.com/Sun0fABeach/bitcoin-knots-config-generator"
          target="_blank"
        >
          <img
            src={github_icon}
            alt="github link"
            title="Source repository"
            width="35"
            height="35"
          />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
