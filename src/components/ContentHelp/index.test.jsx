import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ContentHelp, { StyledBody } from './index';
import { currentTheme } from '../../theme';

describe('<ContentHelp />', () => {
  it('renders', () => {
    const result = renderer.create(<ContentHelp />);

    expect(result.root.children[0].props.header).toBe('Help');

    expect(result.root.children[0].props.body.props.children).toMatchSnapshot();
  });

  it('renders StyledBody', () => {
    const result = renderer.create(<StyledBody theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'color',
      currentTheme.secondaryColor2,
      { modifier: '& svg' },
    );
  });
});
