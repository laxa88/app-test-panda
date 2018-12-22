import React from 'react';
import renderer from 'react-test-renderer';

import ItemCategory from './index';

describe('<ItemCategory />', () => {
  it('renders (default)', () => {
    const mockProps = {
      faIcon: ['dummy-prefix', 'dummy-icon'],
      text1: 'dummy text 1',
      text2: 'dummy text 2',
    };

    const result = renderer.create(<ItemCategory {...mockProps} />);

    expect(result.root.findByProps({ className: 'icon' }).props.icon).toBe(
      mockProps.faIcon,
    );

    expect(result.root.findByProps({ className: 'text1' }).props.children).toBe(
      mockProps.text1,
    );

    expect(result.root.findByProps({ className: 'text2' }).props.children).toBe(
      mockProps.text2,
    );
  });
});
