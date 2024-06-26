import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

import './Section.css';

const styles = {
  sectionVisible: {},
  sectionHidden: {
    visibility: 'hidden',
    height: 0
  }
};

class Section extends Component {
  state = {
    collapsed: true
  };

  constructor (...args) {
    super(...args);
    this.state = {
      collapsed: this.props.collapsed
    };
  }

  componentWillReceiveProps (newProps) {
    if (this.props.collapsed !== newProps.collapsed) {
      this.setState({
        collapsed: newProps.collapsed
      });
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render () {
    const {title, description, knotsExclusive, children} = this.props;
    const {collapsed} = this.state;
    return (
      <div className='section'>
        <h5 onClick={this.toggleCollapsed} style={{cursor: 'pointer'}}>
          <button className='mdl-button mdl-js-button mdl-button--icon'>
            {collapsed ? (
              <i className='material-icons'>expand_more</i>
            ) : (
              <i className='material-icons'>expand_less</i>
            )}
          </button>
          {title}
          {knotsExclusive &&
            <Logo
              className='knots-tag'
              title='Knots exclusive'
              width={25}
              height={25}
            />
          }
        </h5>
        <p>{description}</p>
        <ul className='mdl-list section-list' style={collapsed ? styles.sectionHidden : styles.sectionVisible}>
          {children}
        </ul>
      </div>
    );
  }

  static propTypes = {
    collapsed: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    knotsExclusive: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
  };

  static defaultProps = {
    collapsed: true,
    knotsExclusive: false
  };
}

export default Section;
