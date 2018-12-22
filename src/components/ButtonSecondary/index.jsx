import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledButton = styled.button`
  color: black;
  background-color: ${props => props.theme.secondaryColor1};

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.secondaryColor2};
  }

  :disabled {
    opacity: 0.5;
  }

  :disabled:hover {
    cursor: default;
    background-color: ${props => props.theme.secondaryColor1};
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
