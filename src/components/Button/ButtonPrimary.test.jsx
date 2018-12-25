import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ButtonPrimary from './ButtonPrimary';
import { currentTheme } from '../../theme';

describe('<ButtonPrimary />', () => {
  it('renders', () => {
    const result = renderer.create(<ButtonPrimary />);

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
