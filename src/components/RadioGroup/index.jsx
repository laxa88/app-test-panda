import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';
import RadioButton from './RadioButton';

const StyledGroup = styled.div`
  display: flex;
`;

class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    const { checkedIndex } = this.props;

    this.state = {
      checkedIndex,
    };
  }

  renderRadioButtons = () => {
    const { disabled, options } = this.props;
    const { checkedIndex } = this.state;

    const buttons = options.map((opt, index) => (
      <RadioButton
        key={opt.value}
        index={index}
        label={opt.label}
        value={opt.value}
        checked={checkedIndex === index}
        disabled={disabled}
        onClick={this.handleOnClick}
        labelSize={undefined}
        radioSize={28}
      />
    ));

    return buttons;
  };

  handleOnClick = ({ label, value, index }) => {
    this.setState({ checkedIndex: index });

    const { onChange } = this.props;
    onChange({ label, value, index });
  };

  render() {
    const {
      options, disabled, onChange, ...others
    } = this.props;

    return <StyledGroup {...others}>{this.renderRadioButtons()}</StyledGroup>;
  }
}

RadioGroup.contextType = ThemeContext;

RadioGroup.defaultProps = {
  checkedIndex: null,
  disabled: false,
  onChange: () => {},
  options: [],
};

RadioGroup.propTypes = {
  checkedIndex: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
      label: PropTypes.string,
    }),
  ),
};

export default RadioGroup;
