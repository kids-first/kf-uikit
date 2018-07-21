import React from 'react';
import styled from 'react-emotion';
import chroma from 'chroma-js';
import {
  border,
  borderColor,
  space,
  color,
  fontSize,
  width
} from 'styled-system';


export const CardContainer = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: auto,
  min-width: 240px;
  max-width: 500px;
  h3 {
    padding: 0px;
    margin: 5px;
  }
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

export const CardTitle = styled('h3')`
  width: 100%;
  ${space}
  ${color}
  ${fontSize}
`

CardTitle.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
}

CardTitle.defaultProps = {
  fontSize: 2,
  pl: 1
}

export const CardBody = styled('p')`
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
