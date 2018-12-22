import React from 'react';
import renderer from 'react-test-renderer';

import Link from './index';

describe('<Link />', () => {
  it('renders (default)', () => {
    const result = renderer.create(<Link href="/dummy/path" />);
    expect(result.toJSON().type).toBe('a');
  });

  it('renders (disabled)', () => {
    const result = renderer.create(<Link href="/dummy/path" disabled />);
    expect(result.toJSON().type).toBe('div');
  });
});
