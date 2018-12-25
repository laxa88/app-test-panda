import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledBox = styled.button`
  border: 2px solid;
  border-color: ${props => (props.checked ? props.theme.primaryColor1 : props.theme.textColor2)};
  border-radius: 5px;
  height: 28px;
  width: 28px;

  :hover {
    border-color: ${props => props.theme.primaryColor1};
    cursor: pointer;
  }

  :disabled {
    cursor: default;
    border-color: ${props => props.theme.primaryColor1};
    opacity: 0.2;
  }

  & svg {
    width: 55% !important; /* Override default SVG width */
    height: 60%;
  }
`;

const StyledCheck = styled.div`
  color: ${props => props.theme.textColor1};
`;

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: !!props.checked,
    };
  }

  handleOnChange = () => {
    const { checked } = this.state;
    const newChecked = !checked;
    this.setState({ checked: newChecked });

    const { onChange } = this.props;
    onChange(newChecked);
  };

  render() {
    const { theme } = this.context;
    const { checked } = this.state;
    const { disabled } = this.props;

    const check = checked ? (
      <StyledCheck>
        <FontAwesomeIcon color={theme.textColor1} icon={['fas', 'check']} />
      </StyledCheck>
    ) : (
      undefined
    );

    return (
      <StyledBox
        theme={theme}
        checked={checked}
        disabled={disabled}
        onClick={this.handleOnChange}
      >
        {check}
      </StyledBox>
    );
  }
}

Checkbox.contextType = ThemeContext;

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
