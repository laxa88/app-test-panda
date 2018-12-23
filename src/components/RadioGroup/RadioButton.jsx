import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledRadioButton = styled.button`
  align-items: center;
  border: 0;
  display: flex;

  :hover {
    cursor: pointer;
    ${props => (props.checked ? '' : 'opacity: 0.5')};
  }

  :disabled {
    cursor: default;
    opacity: 0.2;
  }
`;

const StyledIcon = styled.div`
  color: ${props => props.theme.primaryColor1};
  ${props => (props.radioSize ? `font-size: ${props.radioSize}px;` : '')}
`;

const StyledLabel = styled.div`
  color: ${props => props.theme.textColor1};
  ${props => (props.labelSize ? `font-size: ${props.labelSize}px;` : '')}
  padding-left: 10px;
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

    const icon = checked ? ['far', 'dot-circle'] : ['far', 'circle'];

    return (
      <StyledRadioButton
        checked={checked}
        disabled={disabled}
        onClick={this.handleOnClick}
      >
        <StyledIcon theme={theme} radioSize={radioSize}><FontAwesomeIcon icon={icon} /></StyledIcon>
        <StyledLabel theme={theme} labelSize={labelSize}>{label}</StyledLabel>
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
  label: PropTypes.string.isRequired,
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
