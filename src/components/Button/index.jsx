import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.theme.primaryColor1};

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.primaryColor2};
  }

  :disabled {
    opacity: 0.5;
  }

  :disabled:hover {
    cursor: default;
    background-color: ${props => props.theme.primaryColor1};
  }
`;

class Button extends React.PureComponent {
  render() {
    const { theme } = this.context;
    return <StyledButton {...this.props} theme={theme} />;
  }
}

Button.contextType = ThemeContext;

export default Button;
