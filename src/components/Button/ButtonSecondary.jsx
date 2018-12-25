import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

import css from './common.css';

const StyledButton = styled.button`
  color: ${props => props.theme.textColor1};
  background-color: ${props => props.theme.secondaryColor1};

  :hover {
    background-color: ${props => props.theme.secondaryColor2};
  }

  :disabled:hover {
    background-color: ${props => props.theme.secondaryColor1};
  }
`;

class ButtonSecondary extends React.PureComponent {
  render() {
    const { theme } = this.context;
    return <StyledButton className={css.button} {...this.props} theme={theme} />;
  }
}

ButtonSecondary.contextType = ThemeContext;

export default ButtonSecondary;
