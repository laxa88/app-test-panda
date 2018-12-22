import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledButton = styled.button`
  color: black;
  background-color: ${props => props.theme.tertiaryColor};

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.quaternaryColor};
  }

  :disabled {
    opacity: 0.5;
  }

  :disabled:hover {
    cursor: default;
    background-color: ${props => props.theme.tertiaryColor};
  }
`;

class ButtonSecondary extends React.PureComponent {
  render() {
    const { theme } = this.context;
    return <StyledButton {...this.props} theme={theme} />;
  }
}

ButtonSecondary.contextType = ThemeContext;

export default ButtonSecondary;
