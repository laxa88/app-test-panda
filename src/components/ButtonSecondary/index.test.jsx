import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ButtonSecondary from './index';
import { currentTheme, ThemeContext } from '../../theme';

describe('<ButtonSecondary />', () => {
  it('renders (default)', () => {
    const spy = jest.fn();

    const result = renderer.create(<ButtonSecondary onClick={spy} />);

    expect(result.toJSON().type).toBe('button');

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.secondaryColor1,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.secondaryColor2,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.secondaryColor1,
      { modifier: ':disabled:hover' },
    );
  });

  it('renders (themed)', () => {
    const spy = jest.fn();

    const mockTheme = {
      secondaryColor1: 'dummy-color-1',
      secondaryColor2: 'dummy-color-2',
    };

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: mockTheme }}>
        <ButtonSecondary onClick={spy} />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.secondaryColor1,
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.secondaryColor2,
      { modifier: ':hover' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      mockTheme.secondaryColor1,
      { modifier: ':disabled:hover' },
    );
  });
});
