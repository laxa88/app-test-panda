import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from './index';
import { currentTheme } from '../../theme';

describe('<Input />', () => {
  it('renders', () => {
    const result = renderer.create(<Input />);

    expect(result.toJSON().type).toBe('input');

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.textColor2,
    );

    expect(result.toJSON()).toHaveStyleRule('color', currentTheme.textColor1);

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.primaryColor1,
      { modifier: ':focus' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      currentTheme.secondaryColor1,
      { modifier: ':disabled' },
    );
  });
});
