import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

export const StyledLabel = styled.div`
  color: ${props => props.theme.textColor1};
`;

class Label extends React.PureComponent {
  render() {
    const { theme } = this.context;
    const { text, children } = this.props;

    return (
      <div>
        <StyledLabel theme={theme}>{text}</StyledLabel>
        {children}
      </div>
    );
  }
}

Label.contextType = ThemeContext;

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
