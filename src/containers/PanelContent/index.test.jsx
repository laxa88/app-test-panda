import React from 'react';
import renderer from 'react-test-renderer';

import PanelContent from './index';

describe('<PanelContent />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelContent />);

    expect(result.root.children[0].children.length).toBe(3);
  });
});
