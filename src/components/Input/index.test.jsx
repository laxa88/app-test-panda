import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from './index';
import { currentTheme, ThemeContext } from '../../theme';

describe('<Input />', () => {
  it('renders (default)', () => {
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

  it('renders (themed)', () => {
    const mockTheme = {
      primaryColor1: 'dummy-color-1',
      secondaryColor1: 'dummy-color-2',
      textColor1: 'dummy-color-3',
      textColor2: 'dummy-color-4',
    };

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: mockTheme }}>
        <Input />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      mockTheme.textColor2,
    );

    expect(result.toJSON()).toHaveStyleRule('color', mockTheme.textColor1);

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      mockTheme.primaryColor1,
      { modifier: ':focus' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'border-color',
      mockTheme.secondaryColor1,
      { modifier: ':disabled' },
    );
  });
});
