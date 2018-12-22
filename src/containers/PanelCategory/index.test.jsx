import React from 'react';
import renderer from 'react-test-renderer';

import PanelCategory from './index';

describe('<PanelCategory />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelCategory />);
    expect(result).toMatchSnapshot();
  });
});
