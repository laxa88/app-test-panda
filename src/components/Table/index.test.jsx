import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Table from './index';
import { currentTheme } from '../../theme';

describe('<RadioButton />', () => {
  const getMockProps1 = () => ({
    headers: [
      { accessor: 'acc1', header: 'header 1' },
      { accessor: 'acc2', header: 'header 2' },
      { accessor: 'acc3', header: 'header 3' },
    ],

    data: [
      { acc1: 'val 0-1', acc2: 'val 0-2', acc3: 'val 0-3' },
      { acc1: 'val 1-1', acc2: 'val 1-2', acc3: 'val 1-3' },
      { acc1: 'val 2-1', acc2: 'val 2-2', acc3: 'val 2-3' },
    ],
  });

  const getMockProps2 = (headerFunc, cellFunc) => ({
    headers: [
      { accessor: 'acc1', header: headerFunc, cell: cellFunc },
      { accessor: 'acc2', header: headerFunc, cell: cellFunc },
      { accessor: 'acc3', header: headerFunc, cell: cellFunc },
    ],

    data: [
      { acc1: 'val 0-1', acc2: 'val 0-2', acc3: 'val 0-3' },
      { acc1: 'val 1-1', acc2: 'val 1-2', acc3: 'val 1-3' },
      { acc1: 'val 2-1', acc2: 'val 2-2', acc3: 'val 2-3' },
    ],
  });

  it('renders', () => {
    const mockProps = getMockProps1();
    const result = renderer.create(<Table {...mockProps} />);

    expect(result.toJSON().children[0].type).toBe('thead');
    expect(result.toJSON().children[1].type).toBe('tbody');

    const columns = result.toJSON().children[0].children[0].children;
    expect(columns[0].type).toBe('th');
    expect(columns[1].type).toBe('th');
    expect(columns[2].type).toBe('th');

    expect(columns[0].children[0]).toBe(mockProps.headers[0].header);
    expect(columns[1].children[0]).toBe(mockProps.headers[1].header);
    expect(columns[2].children[0]).toBe(mockProps.headers[2].header);

    const rows = result.toJSON().children[1].children;
    const col1Accessor = mockProps.headers[0].accessor;
    const col2Accessor = mockProps.headers[1].accessor;
    const col3Accessor = mockProps.headers[2].accessor;

    expect(rows[0].type).toBe('tr');
    expect(rows[1].type).toBe('tr');
    expect(rows[2].type).toBe('tr');

    expect(rows[0].children[0].type).toBe('td');
    expect(rows[1].children[0].type).toBe('td');
    expect(rows[2].children[0].type).toBe('td');
    expect(rows[0].children[1].type).toBe('td');
    expect(rows[1].children[1].type).toBe('td');
    expect(rows[2].children[1].type).toBe('td');
    expect(rows[0].children[2].type).toBe('td');
    expect(rows[1].children[2].type).toBe('td');
    expect(rows[2].children[2].type).toBe('td');

    expect(rows[0].children[0].children[0]).toBe(mockProps.data[0][col1Accessor]);
    expect(rows[0].children[1].children[0]).toBe(mockProps.data[0][col2Accessor]);
    expect(rows[0].children[2].children[0]).toBe(mockProps.data[0][col3Accessor]);
    expect(rows[1].children[0].children[0]).toBe(mockProps.data[1][col1Accessor]);
    expect(rows[1].children[1].children[0]).toBe(mockProps.data[1][col2Accessor]);
    expect(rows[1].children[2].children[0]).toBe(mockProps.data[1][col3Accessor]);
    expect(rows[2].children[0].children[0]).toBe(mockProps.data[2][col1Accessor]);
    expect(rows[2].children[1].children[0]).toBe(mockProps.data[2][col2Accessor]);
    expect(rows[2].children[2].children[0]).toBe(mockProps.data[2][col3Accessor]);

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor1,
      { modifier: '& thead' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'border-bottom',
      `1px solid ${currentTheme.primaryColor3}`,
      { modifier: '& th' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.secondaryColor3,
      { modifier: '& tbody tr:nth-child(even)' },
    );

    expect(result.toJSON()).toHaveStyleRule(
      'background-color',
      currentTheme.primaryColor2,
      { modifier: '& tbody tr:hover' },
    );
  });

  it('renders with custom renderers', () => {
    const headerFuncSpy = jest.fn();
    const cellFuncSpy = jest.fn();

    const mockProps = getMockProps2(headerFuncSpy, cellFuncSpy);

    renderer.create(<Table {...mockProps} />);

    expect(headerFuncSpy).toHaveBeenCalledTimes(3);
    expect(cellFuncSpy).toHaveBeenCalledTimes(9);
  });
});
