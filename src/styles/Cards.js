import React from 'react';
import styled from 'react-emotion';
import {
  border,
  borderColor,
  space,
  color,
  fontSize,
  width
} from 'styled-system';
import { Heading } from './Headings';
import { Text } from './Text';


export const CardContainer = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: auto;
  min-width: 240px;
  max-width: 500px;
  p {
    margin: 5px
  }
  ${width}
  ${color}
  ${border}
  ${borderColor}

`

CardContainer.propTypes = {
  ...width.propTypes,
  ...color.propTypes,
  ...border.propTypes,
}

CardContainer.defaultProps = {
	bg: 'white',
  border: '1px solid',
  borderColor: 'grey.9'
}

export const CardTitle = styled(Heading.h3)`
  width: auto;
  ${color}
  ${space}
  ${fontSize}
`

CardTitle.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
}

CardTitle.defaultProps = {
  p: 0,
  m: 0,
  pl: 1,
  pr: 1,
  fontSize: 3,
}

export const CardBody = styled(Text.p)`
  width: 100%;
  ${space}
  ${color}
  ${fontSize}
`

CardBody.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
}

CardBody.defaultProps = {
  fontSize: 1,
  pl: 2,
  pr: 2
}
