import React from 'react';
import renderer from 'react-test-renderer';

import PanelBreadcrumb from './index';

describe('<PanelBreadcrumb />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelBreadcrumb />);
    expect(result.toJSON()).toMatchSnapshot();
  });
});
