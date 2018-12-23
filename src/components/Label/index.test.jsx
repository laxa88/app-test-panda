import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Label, { StyledLabel } from './index';
import { currentTheme } from '../../theme';

describe('<Label />', () => {
  it('renders', () => {
    const mockProps = {
      text: 'dummy text',
    };

    const mockContent = <div>Dummy content</div>;

    const result = renderer.create(<Label {...mockProps}>{mockContent}</Label>);

    expect(result.toJSON().type).toBe('div');

    expect(result.root.children[0].children[0].props.children).toBe(mockProps.text);
  });

  it('renders StyledLabel', () => {
    const result = renderer.create(<StyledLabel theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'color',
      currentTheme.textColor1,
    );
  });
});
