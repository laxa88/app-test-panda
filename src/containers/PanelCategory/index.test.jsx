import React from 'react';
import renderer from 'react-test-renderer';

import PanelCategory from './index';

describe('<PanelCategory />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelCategory />);

    // There should be left and right sections
    expect(result.root.findByProps({ className: 'body' }).children.length).toBe(2);

    // Left section should have 3 categories
    expect(result.root.findByProps({ className: 'body' }).children[0].children.length).toBe(3);

    // Right section should have 1 category
    expect(result.root.findByProps({ className: 'body' }).children[1].children.length).toBe(1);
  });
});
