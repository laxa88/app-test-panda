import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './index';
import { currentTheme } from '../../theme';

describe('<Button />', () => {
  it('renders', () => {
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
});
