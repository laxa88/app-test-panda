import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';
import Body from './Body';

const StyledContainer = styled.div`
  border: 1px solid ${props => props.theme.secondaryColor2};
  width: 100%;
`;

const StyledHeader = styled.button`
  background-color: ${props => props.theme.secondaryColor3};
  display: flex;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

const StyledArrow = styled.div`
  color: ${props => props.theme.primaryColor1};
  position: absolute;
  right: 0;
`;

class Accordion extends React.PureComponent {
  constructor(props) {
    super(props);

    const { isOpen } = this.props;

    this.state = {
      isOpen,
    };
  }

  handleOnClickHeader = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { theme } = this.context;
    const { isOpen } = this.state;
    const { header, body } = this.props;

    const arrowText = isOpen ? 'close' : 'open';
    const arrowIcon = isOpen ? 'long-arrow-alt-up' : 'long-arrow-alt-down';

    return (
      <StyledContainer theme={theme}>
        <StyledHeader theme={theme} onClick={this.handleOnClickHeader}>
          {header}

          <StyledArrow theme={theme}>
            {arrowText}
            <FontAwesomeIcon icon={['fas', arrowIcon]} />
          </StyledArrow>
        </StyledHeader>

        <Body isOpen={isOpen}>{body}</Body>
      </StyledContainer>
    );
  }
}

Accordion.contextType = ThemeContext;

Accordion.defaultProps = {
  isOpen: false,
};

Accordion.propTypes = {
  isOpen: PropType.bool,
  header: PropType.node.isRequired,
  body: PropType.node.isRequired,
};

export default Accordion;
