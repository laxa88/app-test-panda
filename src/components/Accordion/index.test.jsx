import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Accordion from './index';
import { currentTheme } from '../../theme';

describe('<Accordion />', () => {
  const mockProps = {
    header: 'Dummy header',
    body: 'Dummy body',
  };

  it('renders', () => {
    const result = renderer.create(<Accordion {...mockProps} />);

    expect(result.toJSON().type).toBe('div');
    expect(result.toJSON()).toHaveStyleRule('border', `1px solid ${currentTheme.secondaryColor2}`);

    expect(result.toJSON().children[0].children[0]).toBe(mockProps.header);
    expect(result.toJSON().children[1].children[0]).toBe(mockProps.body);
  });

  it('toggles body isOpen state', () => {
    const result = renderer.create(<Accordion {...mockProps} />);

    expect(result.getInstance().state.isOpen).toBe(false);

    result.root.children[0].props.children[0].props.onClick();

    expect(result.getInstance().state.isOpen).toBe(true);
  });
});
