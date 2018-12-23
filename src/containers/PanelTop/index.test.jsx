import React from 'react';
import renderer from 'react-test-renderer';

import PanelTop from './index';

describe('<PanelTop />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelTop />);
    expect(result.root.children[0].props.children.length).toBe(2);
  });
});
