import styled from 'react-emotion';
import { variant } from 'styled-system';

const buttonStyle = variant({
  prop: 'colors',
  key: 'buttons',
});

export const Button = styled('button')`
  ${buttonStyle}
  height: 30px;
  border-radius: 14px;
  background-color: ${props => {const { colors: { bg } } = props; return ({bg})}};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: #fff;
`;

Button.defaultProps = {
  variant: 'primary',
};

Button.displayName = 'Button';

export default Button;
