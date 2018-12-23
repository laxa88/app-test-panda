import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioGroup from './index';

describe('<RadioGroup />', () => {
  const mockOptions = [
    { value: 101, label: 'dummy option 1' },
    { value: 201, label: 'dummy option 2' },
    { value: 301, label: 'dummy option 3' },
  ];

  it('renders', () => {
    const result = renderer.create(<RadioGroup options={mockOptions} />);

    expect(result.toJSON().type).toBe('div');
  });

  it('triggers onChange', () => {
    const spy = jest.fn();

    const mockIndex = 2;

    const expected = {
      label: mockOptions[mockIndex].label,
      value: mockOptions[mockIndex].value,
      index: mockIndex,
    };

    const result1 = renderer.create(<RadioGroup options={mockOptions} />);
    const result2 = renderer.create(<RadioGroup options={mockOptions} onChange={spy} />);

    result1.toJSON().children[mockIndex].props.onClick();
    result2.toJSON().children[mockIndex].props.onClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expected);
  });
});
