import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

import './Item.css'

const heightStyle = { height: '100%' };

function Item ({title, description, children, disabled, knotsExclusive}) {
  const isDisabled = disabled ? 'disabled' : '';
  return (
    <li
      className={`item mdl-list__item mdl-list__item--two-line ${isDisabled}`}
      style={heightStyle}
    >
      <span className='mdl-list__item-primary-content' style={heightStyle}>
        <span>
          <span>{title}</span>
          {knotsExclusive &&
            <Logo
              className='knots-tag'
              title='Knots exclusive'
              width={22}
              height={22}
            />
          }
        </span>
        <span className='mdl-list__item-sub-title'>
          {description}
        </span>
      </span>
      <span className='mdl-list__item-secondary-content'>
        {children}
      </span>
    </li>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  disabled: PropTypes.bool,
  knotsExclusive: PropTypes.bool
};

Item.defaultPropTypes = {
  disabled: false,
  knotsExclusive: false
};

export default Item;
