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
  });

  it('renders (themed)', () => {
    const spy = jest.fn();

    const mockColor = 'dummy-color';

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: { primaryColor: mockColor } }}>
        <Button onClick={spy} />
      </ThemeContext.Provider>,
    );

    expect(result.toJSON()).toHaveStyleRule('background-color', mockColor);
  });
});
