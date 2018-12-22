import React from 'react';
import renderer from 'react-test-renderer';

import PanelTop from './index';

describe('<PanelTop />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelTop />);
    expect(result.toJSON().props).toEqual({ className: 'body' });
  });
});
