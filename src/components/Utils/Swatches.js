import React from 'react';
import styled from 'react-emotion';
import chroma from 'chroma-js';
import { space, color, fontSize } from 'styled-system';


const Swatch = styled('div')`
  width: 128px;
  height: 128px;
  display: block;
  border-radius: 19px;
  ${space}
  ${color}
`

Swatch.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}

Swatch.defaultProps = {
	m: 1,
	bg: 'primary'
}

const Badge = styled('span')`
  width: 120px;
  height: 12px;
  border-radius: 5px;
	display: block;
	${space}
  ${color}
	${fontSize}
`

Badge.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
	...fontSize.propTypes
}

Badge.defaultProps = {
	mb: 1,
  ml: 10,
	mr: 10,
  p: 1,
	fontSize: 12,
	bg: 'primary'
}

export class SwatchDisplay extends React.Component {
	render() {
		return (
			<div style={{display: 'inline-block', margin: '0 10px'}}>
				<h3>{this.props.name}</h3>
				<Swatch bg={this.props.color} />
				<span style={{padding: '0 10px', fontSize: 11}}>{chroma(this.props.color).css()}</span>
				<br />
				<div style={{padding: '0 10px', fontSize: 11}}>{chroma(this.props.color).hex()}</div>
				<Badge bg={this.props.color} color='black'>Lorem Ipsum</Badge>
				<Badge bg={this.props.color} color='black'><b>Lorem Ipsum</b></Badge>
				<Badge bg={this.props.color} color='white'>Lorem Ipsum</Badge>
				<Badge bg={this.props.color} color='white'><b>Lorem Ipsum</b></Badge>
				<Badge color={this.props.color} bg='black'>Lorem Ipsum</Badge>
				<Badge color={this.props.color} bg='black'><b>Lorem Ipsum</b></Badge>
				<Badge color={this.props.color} bg='white'>Lorem Ipsum</Badge>
				<Badge color={this.props.color} bg='white'><b>Lorem Ipsum</b></Badge>
			</div>
		)
	}
}

export default Swatch;
