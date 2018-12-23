import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { currentTheme } from '../../theme';
import MenuApp, { StyledContainer } from './index';

describe('<MenuApp />', () => {
  it('renders', () => {
    const result = renderer.create(<MenuApp />);

    expect(result.root.children[0].props.children[0].props.icon).toEqual(['fas', 'bars']);
    expect(result.root.children[0].props.children[1].props.children).toBe('Dummy App');
  });

  it('renders StyledContainer', () => {
    const result = renderer.create(<StyledContainer theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'color',
      currentTheme.primaryColor1,
      { modifier: '& svg' },
    );
  });
});
