import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledInput = styled.input`
  border: 2px solid;
  border-color: ${props => props.theme.textColor2};
  border-radius: 5px;
  color: ${props => props.theme.textColor1};

  :focus {
    border-color: ${props => props.theme.primaryColor1};
  }

  :disabled {
    border-color: ${props => props.theme.secondaryColor1};
  }
`;

class Input extends React.PureComponent {
  render() {
    const { theme } = this.context;
    return <StyledInput {...this.props} theme={theme} />;
  }
}

Input.contextType = ThemeContext;

export default Input;
