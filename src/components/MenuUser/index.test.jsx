import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { currentTheme } from '../../theme';
import MenuUser, { StyledContainer } from './index';

describe('<MenuUser />', () => {
  it('renders', () => {
    const result = renderer.create(<MenuUser />);

    expect(result.root.children[0].props.children[0].props.icon).toEqual(['fas', 'user']);
    expect(result.root.children[0].props.children[1].props.children).toBe('John | Log out');
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
