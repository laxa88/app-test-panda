import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './index';
import { currentTheme, ThemeContext } from '../../theme';

describe('<Button />', () => {
  it('renders (default)', () => {
    const spy = jest.fn();

    const result = renderer.create(<Button onClick={spy} />);

    expect(result.toJSON().type).toBe('button');

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.secondaryColor,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor,
      { modifier: ':disabled:hover' },
    );
  });

  it('renders (themed)', () => {
    const spy = jest.fn();

    const mockTheme = {
      primaryColor: 'dummy-color-1',
      secondaryColor: 'dummy-color-2',
    };

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: mockTheme }}>
        <Button onClick={spy} />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.primaryColor,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.secondaryColor,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.primaryColor,
      { modifier: ':disabled:hover' },
    );
  });
});
