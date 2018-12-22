import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledButton = styled.button`
  background-color: ${props => props.theme.tertiaryColor};

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.quaternaryColor};
  }

  :disabled {
    opacity: 0.5;
  }

  :hover:disabled {
    cursor: default;
    background-color: ${props => props.theme.tertiaryColor};
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
