import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import CheckboxGroup from './index';

describe('<CheckboxGroup />', () => {
  const mockOptions = [
    { value: 101, label: 'dummy option 1' },
    { value: 201, label: 'dummy option 2' },
    { value: 301, label: 'dummy option 3' },
    { value: 401, label: 'dummy option 4' },
  ];

  const mockCheckedIndices = [true, false, false, true];

  it('renders', () => {
    const result = renderer.create(<CheckboxGroup options={mockOptions} />);

    expect(result.getInstance().state.checkedIndices).toEqual([]);
  });

  it('renders (with default checkedIndices)', () => {
    const result = renderer.create(
      <CheckboxGroup
        options={mockOptions}
        checkedIndices={mockCheckedIndices}
      />,
    );

    expect(result.getInstance().state.checkedIndices).toEqual(mockCheckedIndices);
  });

  it('triggers onChange', () => {
    const spy = jest.fn();

    const expected = {
      checkedIndices: [undefined, true],
      options: mockOptions,
    };

    const result1 = renderer.create(<CheckboxGroup options={mockOptions} />);
    const result2 = renderer.create(
      <CheckboxGroup options={mockOptions} onChange={spy} />,
    );

    // click second item in the list of options
    result1.toJSON().children[1].children[0].props.onClick();
    result2.toJSON().children[1].children[0].props.onClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expected);
  });
});
