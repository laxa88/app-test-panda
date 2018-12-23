import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Accordion, { StyledContainer, StyledHeader, StyledArrow } from './index';
import { currentTheme } from '../../theme';

describe('<Accordion />', () => {
  const mockProps = {
    header: 'Dummy header',
    body: 'Dummy body',
  };

  it('renders', () => {
    const result = renderer.create(<Accordion {...mockProps} />);

    expect(result.toJSON().type).toBe('div');

    expect(result.toJSON().children[0].children[0]).toBe(mockProps.header);
    expect(result.toJSON().children[1].children[0]).toBe(mockProps.body);
  });

  it('renders StyledContainer', () => {
    const result = renderer.create(<StyledContainer theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'border',
      `1px solid ${currentTheme.secondaryColor2}`,
    );
  });

  it('renders StyledHeader', () => {
    const result = renderer.create(<StyledHeader theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      `${currentTheme.secondaryColor3}`,
    );
  });

  it('renders StyledArrow', () => {
    const result = renderer.create(<StyledArrow theme={currentTheme} />);

    expect(result.toJSON()).toHaveStyleRule(
      'color',
      `${currentTheme.primaryColor1}`,
    );
  });

  it('toggles body isOpen state', () => {
    const result = renderer.create(<Accordion {...mockProps} />);

    expect(result.getInstance().state.isOpen).toBe(false);

    result.root.children[0].props.children[0].props.onClick();

    expect(result.getInstance().state.isOpen).toBe(true);
  });
});
