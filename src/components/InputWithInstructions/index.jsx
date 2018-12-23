import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';
import Input from '../Input';

const StyledInstruction = styled.div`
  color: ${props => props.theme.textColor2};
  font-size: 75%;
`;

class InputWithInstructions extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  handleOnFocus = () => {
    this.setState({ isFocused: true });
  };

  handleOnBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { theme } = this.context;
    const { isFocused } = this.state;
    const { instructions, ...others } = this.props;

    const instructionSection = isFocused ? (
      <StyledInstruction theme={theme}>{instructions}</StyledInstruction>
    ) : (
      undefined
    );

    return (
      <div>
        <Input
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          {...others}
        />
        {instructionSection}
      </div>
    );
  }
}

InputWithInstructions.contextType = ThemeContext;

export default InputWithInstructions;
