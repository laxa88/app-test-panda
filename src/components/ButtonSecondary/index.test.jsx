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
      currentTheme.tertiaryColor,
    );
  });

  it('renders (themed)', () => {
    const spy = jest.fn();

    const mockColor = 'dummy-color';

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: { tertiaryColor: mockColor } }}>
        <ButtonSecondary onClick={spy} />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule('background-color', mockColor);
  });
});
