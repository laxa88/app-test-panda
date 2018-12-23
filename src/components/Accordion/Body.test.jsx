import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Body from './Body';
import { currentTheme } from '../../theme';

describe('<Body />', () => {
  beforeEach(() => {
    jest.spyOn(React, 'createRef').mockReturnValue({
      current: {},
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders', () => {
    const result = renderer.create(<Body />);

    expect(result.toJSON().type).toBe('div');
    expect(result.toJSON()).toHaveStyleRule('color', currentTheme.textColor1);
  });

  it('renders (opened)', () => {
    const result = renderer.create(<Body isOpen />);

    expect(result.toJSON().type).toBe('div');
    expect(result.toJSON()).toHaveStyleRule('color', currentTheme.textColor1);
  });

  it('triggers updateHeight', () => {
    const result = renderer.create(<Body />);

    const spy = jest.spyOn(result.getInstance(), 'forceUpdate');

    expect(spy).toHaveBeenCalledTimes(0);

    result.getInstance().updateHeight();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
