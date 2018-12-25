import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';
import Checkbox from '../Checkbox';

const StyledGroup = styled.div`
  display: flex;
`;

const StyledContent = styled.div`
  padding: 0 15px;
`;

const StyledCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    const { checkedIndices } = this.props;

    this.state = {
      checkedIndices,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { checkedIndices } = this.state;

    const maxLen = Math.max(nextProps.checkedIndices.length, checkedIndices.length);

    let dirty = false;

    for (let i = 0; i < maxLen; i += 1) {
      if (nextProps.checkedIndices[i] !== checkedIndices[i]) {
        dirty = true;
        break;
      }
    }

    if (dirty) {
      this.setState({ checkedIndices: nextProps.checkedIndices });
    }
  }

  handleOnChangeCheckbox = index => (newCheckedValue) => {
    const { options, onChange } = this.props;
    const { checkedIndices } = this.state;
    const newCheckedIndices = checkedIndices.slice();

    newCheckedIndices[index] = newCheckedValue;

    this.setState({
      checkedIndices: newCheckedIndices,
    });

    onChange({
      checkedIndices: newCheckedIndices,
      options,
    });
  };

  renderCheckboxes = () => {
    const { disabled, options } = this.props;
    const { checkedIndices } = this.state;

    const boxes = options.map((opt, index) => (
      <StyledCheckboxContainer key={opt.value}>
        <Checkbox
          disabled={disabled}
          checked={checkedIndices[index]}
          onChange={this.handleOnChangeCheckbox(index)}
        />
        <StyledContent>{opt.label}</StyledContent>
      </StyledCheckboxContainer>
    ));

    return boxes;
  };

  render() {
    const {
      options, disabled, onChange, ...others
    } = this.props;

    return <StyledGroup {...others}>{this.renderCheckboxes()}</StyledGroup>;
  }
}

RadioGroup.contextType = ThemeContext;

RadioGroup.defaultProps = {
  checkedIndices: [],
  disabled: false,
  onChange: () => {},
  options: [],
};

RadioGroup.propTypes = {
  checkedIndices: PropTypes.arrayOf(PropTypes.bool),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
      label: PropTypes.node,
    }),
  ),
};

export default RadioGroup;
