import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { NavContainer } from '../../styles/Navigation';
import { TopBar } from '../../styles/Headers';


export class TopNav extends React.Component {
	render() {
		return (
      <NavContainer>
        <TopBar barColor={this.props.barColor}/>
          Hello
          {this.props.children}
      </NavContainer>
		)
	}
}

TopNav.defaultProps = {
  barColor: null
}

TopNav.propTypes = {
  barColor: PropTypes.string
}
