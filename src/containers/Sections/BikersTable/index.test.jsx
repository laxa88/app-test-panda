import React from 'react';
import renderer from 'react-test-renderer';

import BikersTable, {
  isWeekdays,
  isWeekends,
  printDays,
} from './index';

describe('<BikersTable />', () => {
  const getMockProps = () => ({
    onDelete: jest.fn(),
    tableData: [],
  });

  describe('isWeekdays()', () => {
    [
      { input: [1, 0, 0, 0, 0, 0, 0], expected: 1 },
      { input: [1, 1, 0, 0, 0, 0, 0], expected: 2 },
      { input: [1, 1, 1, 0, 0, 0, 0], expected: 3 },
      { input: [1, 1, 1, 1, 0, 0, 0], expected: 4 },
      { input: [1, 1, 1, 1, 1, 0, 0], expected: 5 },
    ].forEach((config) => {
      it(`returns ${config.expected} for ${config.input}`, () => {
        const result = isWeekdays(config.input);
        expect(result).toBe(config.expected);
      });
    });
  });

  describe('isWeekend()', () => {
    [
      { input: [0, 0, 0, 0, 0, 0, 0], expected: 0 },
      { input: [0, 0, 0, 0, 0, 1, 0], expected: 1 },
      { input: [0, 0, 0, 0, 0, 0, 1], expected: 1 },
      { input: [0, 0, 0, 0, 0, 1, 1], expected: 2 },
    ].forEach((config) => {
      it(`returns ${config.expected} for ${config.input}`, () => {
        const result = isWeekends(config.input);
        expect(result).toBe(config.expected);
      });
    });
  });

  describe('printDays()', () => {
    [
      { input: [1, 0, 0, 0, 0, 0, 0], expected: 'Mon' },
      { input: [1, 0, 0, 0, 0, 1, 0], expected: 'Mon, Sat' },
      { input: [1, 1, 1, 1, 1, 1, 1], expected: 'Mon, Tue, Wed, Thu, Fri, Sat, Sun' },
    ].forEach((config) => {
      it(`returns "${config.expected}" for ${config.input}`, () => {
        const result = printDays(config.input);
        expect(result).toBe(config.expected);
      });
    });
  });

  describe('cellDays()', () => {
    const mockProps = getMockProps();
    const wrapper = renderer.create(<BikersTable {...mockProps} />);

    [
      { input: [0, 0, 0, 0, 0, 0, 0], expected: 'None' },
      { input: [1, 1, 1, 1, 1, 1, 1], expected: 'Every day' },
      { input: [1, 1, 1, 1, 1, 0, 0], expected: 'Week days' },
      { input: [0, 0, 0, 0, 0, 1, 1], expected: 'Weekends' },
      { input: [1, 0, 0, 0, 0, 0, 0], expected: 'Mon' },
      { input: [0, 0, 0, 0, 0, 1, 0], expected: 'Sat' },
      { input: [0, 0, 0, 0, 1, 1, 1], expected: 'Fri, Sat, Sun' },
      { input: [1, 1, 1, 1, 1, 1, 0], expected: 'Mon, Tue, Wed, Thu, Fri, Sat' },
      { input: [0, 0, 0, 0, 0, 0, 1, 1], expected: 'Sun, Sun' },
    ].forEach((config) => {
      it(`returns "${config.expected}" for ${config.input}`, () => {
        const data = { cellData: config.input };
        const result = wrapper.getInstance().cellDays(data);
        expect(result).toBe(config.expected);
      });
    });
  });

  it('triggers handleOnClickDelete', () => {
    const mockProps = getMockProps();
    const wrapper = renderer.create(<BikersTable {...mockProps} />);

    const mockItem = 'dummy item';

    wrapper.getInstance().handleOnClickDelete(mockItem)();

    expect(mockProps.onDelete).toHaveBeenCalledWith(mockItem);
  });
});
