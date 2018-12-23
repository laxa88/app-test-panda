import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../theme';


export const StyledContainer = styled.div`
  display: flex;

  & svg {
    color: ${props => props.theme.primaryColor1};
    padding-right: 10px;
  }
`;

class MenuUser extends React.PureComponent {
  render() {
    const { theme } = this.context;

    return (
      <StyledContainer theme={theme}>
        <FontAwesomeIcon icon={['fas', 'user']} />
        <div>John | Log out</div>
      </StyledContainer>
    );
  }
}

MenuUser.contextType = ThemeContext;

export default MenuUser;
