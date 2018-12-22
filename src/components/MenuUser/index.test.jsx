import React from 'react';
import renderer from 'react-test-renderer';

import MenuUser from './index';

describe('<MenuUser />', () => {
  it('renders', () => {
    const result = renderer.create(<MenuUser />);
    expect(result).toMatchSnapshot();
  });
});
