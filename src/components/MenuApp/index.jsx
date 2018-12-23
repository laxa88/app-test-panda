import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ThemeContext } from '../../theme';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    color: ${props => props.theme.primaryColor1};
    font-size: 18px;
    padding-right: 10px;
  }

  & h3 {
    font-size: 19px;
  }
`;

class MenuApp extends React.PureComponent {
  render() {
    const { theme } = this.context;

    return (
      <StyledContainer theme={theme}>
        <FontAwesomeIcon icon={['fas', 'bars']} />
        <h3>Dummy App</h3>
      </StyledContainer>
    );
  }
}

MenuApp.contextType = ThemeContext;

export default MenuApp;
