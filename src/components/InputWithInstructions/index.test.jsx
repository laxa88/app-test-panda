import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import InputWithInstructions from './index';

describe('<InputWithInstructions />', () => {
  it('renders', () => {
    const result = renderer.create(<InputWithInstructions />);

    expect(result.toJSON().type).toBe('div');
  });

  it('toggles on focus and blur', () => {
    const mockInstructions = 'dummy text';

    const result = renderer.create(<InputWithInstructions instructions={mockInstructions} />);

    // Default instruction is invisible
    expect(result.root.instance.state.isFocused).toBe(false);
    expect(result.root.children[0].children[1].children[0].props.style).toEqual({ opacity: 0 });

    // Instruction is visible on focus
    result.toJSON().children[0].props.onFocus();
    expect(result.root.instance.state.isFocused).toBe(true);
    expect(result.root.children[0].children[1].children[0].props.style).toBeUndefined();

    // Check isFocused is reset correctly
    result.toJSON().children[0].props.onBlur();
    expect(result.root.instance.state.isFocused).toBe(false);
  });
});
