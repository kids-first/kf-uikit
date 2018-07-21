import React from 'react';
import styled from 'react-emotion';
import chroma from 'chroma-js';
import { CardContainer, CardTitle, CardBody } from '../../styles/Cards';
import { TopBar } from '../../styles/Headers';


export class Card extends React.Component {
	render() {
		return (
      <CardContainer>
        <TopBar />
        <CardTitle>
          {this.props.title}
        </CardTitle>
        <CardBody>
          Hello
        </CardBody>
      </CardContainer>
		)
	}
}

