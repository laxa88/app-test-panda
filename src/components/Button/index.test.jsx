import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './index';
import { currentTheme, ThemeContext } from '../../theme';

describe('<Button />', () => {
  it('renders (default)', () => {
    const result = renderer.create(<Button />);

    expect(result.toJSON().type).toBe('button');

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor1,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor2,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor1,
      { modifier: ':disabled:hover' },
    );
  });

  it('renders (themed)', () => {
    const mockTheme = {
      primaryColor1: 'dummy-color-1',
      primaryColor2: 'dummy-color-2',
    };

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: mockTheme }}>
        <Button />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.primaryColor1,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.primaryColor2,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.primaryColor1,
      { modifier: ':disabled:hover' },
    );
  });
});
