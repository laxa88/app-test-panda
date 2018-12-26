import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledRadioButton = styled.button`
  background-color: rgba(0, 0, 0, 0); /* Override default white */
  align-items: center;
  border: 0;
  display: flex;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
    opacity: 0.2;
  }
`;

export const StyledCircle = styled.div`
  width: ${props => (props.radioSize ? props.radioSize : 25)}px;
  height: ${props => (props.radioSize ? props.radioSize : 25)}px;

  border: 2px solid;
  border-color: ${props => (props.checked ? props.theme.primaryColor1 : props.theme.textColor2)};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    border-color: ${props => props.theme.primaryColor1};
  }
`;

export const StyledDot = styled.div`
  ${props => (props.checked ? '' : 'opacity: 0;')}
  background-color: ${props => props.theme.textColor1};
  border-radius: 50%;
  width: 16px;
  height: 16px;
`;

export const StyledLabel = styled.div`
  color: ${props => props.theme.textColor1};
  ${props => (props.labelSize ? `font-size: ${props.labelSize}px;` : '')}
  padding: 0 30px 0 10px;
`;

class RadioButton extends React.PureComponent {
  handleOnClick = () => {
    const {
      onClick, label, value, index,
    } = this.props;

    onClick({ label, value, index });
  };

  render() {
    const {
      label, labelSize, radioSize, checked, disabled,
    } = this.props;
    const { theme } = this.context;

    return (
      <StyledRadioButton
        checked={checked}
        disabled={disabled}
        onClick={this.handleOnClick}
      >
        <StyledCircle theme={theme} checked={checked} radioSize={radioSize}>
          <StyledDot theme={theme} checked={checked} />
        </StyledCircle>

        <StyledLabel theme={theme} labelSize={labelSize}>
          {label}
        </StyledLabel>
      </StyledRadioButton>
    );
  }
}

RadioButton.contextType = ThemeContext;

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  labelSize: undefined,
  onClick: () => {},
  radioSize: undefined,
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  index: PropTypes.number.isRequired,
  label: PropTypes.node.isRequired,
  labelSize: PropTypes.number,
  onClick: PropTypes.func,
  radioSize: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default RadioButton;
