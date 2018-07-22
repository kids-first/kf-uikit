import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import chroma from 'chroma-js';
import { CardContainer, CardTitle, CardBody } from '../../styles/Cards';
import { TopBar } from '../../styles/Headers';


export class Card extends React.Component {
	render() {
		return (
      <CardContainer>
        <TopBar barColor={this.props.barColor}/>
        <CardTitle>
          {this.props.title}
        </CardTitle>
        <CardBody>
          {this.props.children}
        </CardBody>
      </CardContainer>
		)
	}
}

Card.defaultProps = {
  barColor: null
}

Card.propTypes = {
  barColor: PropTypes.string
}
