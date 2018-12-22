import React from 'react';
import renderer from 'react-test-renderer';

import MenuApp from './index';

describe('<MenuApp />', () => {
  it('renders', () => {
    const result = renderer.create(<MenuApp />);
    expect(result.toJSON()).toMatchSnapshot();
  });
});
