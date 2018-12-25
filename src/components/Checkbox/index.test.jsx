import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Checkbox from './index';
import { currentTheme } from '../../theme';

describe('<Checkbox />', () => {
  it('renders unchecked', () => {
    const result = renderer.create(<Checkbox />);

    expect(result.toJSON().type).toBe('button');

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.textColor2,
    );

    expect(result.toJSON()).toHaveStyleRule('border-color', currentTheme.textColor2);

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.primaryColor1,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.primaryColor1,
      { modifier: ':disabled' },
    );
  });

  it('renders checked', () => {
    const result = renderer.create(<Checkbox checked />);

    expect(result.toJSON()).toHaveStyleRule('border-color', currentTheme.primaryColor1);
  });

  it('triggers componentWillReceiveProps', () => {
    const result = renderer.create(<Checkbox checked />);

    const mockNextProps = { checked: 'dummy val' };

    result.getInstance().componentWillReceiveProps(mockNextProps);

    expect(result.getInstance().state.checked).toBe(mockNextProps.checked);

    // triggering with same value again should do nothing

    result.getInstance().componentWillReceiveProps(mockNextProps);

    expect(result.getInstance().state.checked).toBe(mockNextProps.checked);
  });

  it('triggers onChange', () => {
    const spy = jest.fn();

    const result1 = renderer.create(<Checkbox onChange={spy} />);
    const result2 = renderer.create(<Checkbox />);

    result1.root.findByType('button').props.onClick();
    result2.root.findByType('button').props.onClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true);
  });
});
