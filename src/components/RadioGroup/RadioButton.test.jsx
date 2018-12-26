import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioButton, {
  StyledCircle,
  StyledDot,
  StyledLabel,
} from './RadioButton';
import { currentTheme } from '../../theme';

describe('<RadioButton />', () => {
  const mockProps = {
    index: 101,
    label: 'dummy label',
    value: 'dummy value',
  };

  it('renders default', () => {
    const result = renderer.create(<RadioButton {...mockProps} />);

    expect(result.toJSON().type).toBe('button');
  });

  it('StyledCircle renders', () => {
    const result = renderer.create(<StyledCircle theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule('width', '25px');
    expect(result.toJSON()).toHaveStyleRule('height', '25px');
    expect(result.toJSON()).toHaveStyleRule('border-color', currentTheme.textColor2);

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.primaryColor1,
      { modifier: ':hover' },
    );

    result.update(<StyledCircle theme={currentTheme} radioSize={123} checked />);

    expect(result.toJSON()).toHaveStyleRule('width', '123px');
    expect(result.toJSON()).toHaveStyleRule('height', '123px');
    expect(result.toJSON()).toHaveStyleRule('border-color', currentTheme.primaryColor1);
  });

  it('StyledDot renders', () => {
    const result = renderer.create(<StyledDot theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule('opacity', '0');

    result.update(<StyledDot theme={currentTheme} checked />);

    expect(result.toJSON()).toHaveStyleRule('opacity', undefined);
  });

  it('StyledLabel renders', () => {
    const result = renderer.create(<StyledLabel theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule('color', currentTheme.textColor1);
    expect(result.toJSON()).toHaveStyleRule('font-size', undefined);

    result.update(<StyledLabel theme={currentTheme} labelSize={123} />);

    expect(result.toJSON()).toHaveStyleRule('font-size', '123px');
  });

  it('triggers onClick', () => {
    const spy = jest.fn();

    const result1 = renderer.create(<RadioButton {...mockProps} />);
    const result2 = renderer.create(<RadioButton {...mockProps} onClick={spy} />);

    result1.root.findByType('button').props.onClick();
    result2.root.findByType('button').props.onClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(mockProps);
  });
});
