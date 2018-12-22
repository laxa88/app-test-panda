import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledDisabledLink = styled.div`
  color: ${props => props.theme.textColor1};
  display: initial;
  opacity: 0.5;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.primaryColor1};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

class Link extends React.PureComponent {
  render() {
    const { theme } = this.context;
    const { disabled, ...others } = this.props;

    if (disabled) {
      return <StyledDisabledLink {...others} theme={theme} />;
    }

    return <StyledLink {...others} theme={theme} />;
  }
}

Link.contextType = ThemeContext;

export default Link;
