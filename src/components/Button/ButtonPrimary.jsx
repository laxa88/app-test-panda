import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

import css from './common.css';

const StyledButton = styled.button`
  color: white;
  background-color: ${props => props.theme.primaryColor1};

  :hover {
    background-color: ${props => props.theme.primaryColor2};
  }

  :disabled:hover {
    background-color: ${props => props.theme.primaryColor1};
  }
`;

class ButtonPrimary extends React.PureComponent {
  render() {
    const { theme } = this.context;
    return <StyledButton className={css.button} {...this.props} theme={theme} />;
  }
}

ButtonPrimary.contextType = ThemeContext;

export default ButtonPrimary;
