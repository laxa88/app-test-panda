import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioButton from './RadioButton';
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

    expect(result.toJSON()).toHaveStyleRule(
      'opacity',
      '0.5',
      { modifier: ':hover' },
    );

    const icon = result.root.findAllByType('div')[0];
    expect(icon.props.children.props.icon).toEqual(['far', 'circle']);
  });

  it('renders checked', () => {
    const result = renderer.create(<RadioButton {...mockProps} checked />);

    expect(result.toJSON()).toHaveStyleRule(
      'opacity',
      undefined,
      { modifier: ':hover' },
    );

    const icon = result.root.findAllByType('div')[0];
    expect(icon.props.children.props.icon).toEqual(['far', 'dot-circle']);
  });

  it('renders with custom radio and label sizes', () => {
    const mockRadioSize = 201;
    const mockLabelSize = 301;

    const result = renderer.create(
      <RadioButton
        {...mockProps}
        radioSize={mockRadioSize}
        labelSize={mockLabelSize}
      />,
    );

    const icon = result.toJSON().children[0];
    expect(icon).toHaveStyleRule('color', currentTheme.primaryColor1);
    expect(icon).toHaveStyleRule('font-size', `${mockRadioSize}px`);

    const label = result.toJSON().children[1];
    expect(label).toHaveStyleRule('color', currentTheme.textColor1);
    expect(label).toHaveStyleRule('font-size', `${mockLabelSize}px`);
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
