/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../src/components/Table';
import { sakura, ThemeContext } from '../src/theme';

const generateData = (count) => {
  const result = [];

  for (let i = 0; i < count; i += 1) {
    result.push({
      fullName: `dummy fullName ${i}`,
      email: `dummy email ${i}`,
      city: `dummy city ${i}`,
      rideInGroup: `dummy rideInGroup ${i}`,
      daysOfWeek: `dummy daysOfWeek ${i}`,
      registrationDay: `dummy registrationDay ${i}`,
      id: `dummy id ${i}`,
    });
  }

  return result;
};

const generateData2 = (count) => {
  const result = [];

  for (let i = 0; i < count; i += 1) {
    result.push({
      fullName: `dummy fullName ${i}`,
      email: `dummy email ${i}`,
      city: `dummy city ${i}`,
      rideInGroup: `dummy rideInGroup ${i}`,
      daysOfWeek: `dummy daysOfWeek ${i}`,
      registrationDay: { date: `Date ${i}`, time: `Time ${i}` },
      id: `dummy id ${i}`,
    });
  }

  return result;
};

const headerRenderer = headerVal => (data) => {
  console.log('header:', data);

  return (
    <div>
      #
      {headerVal}
      #
    </div>
  );
};

const cellRenderer = ({ rowData, cellData }) => {
  console.log('cell:', rowData, cellData);

  return (
    <div>
      #
      {cellData}
      #
    </div>
  );
};

const timeRenderer = ({ cellData }) => {
  console.log('time', cellData);

  return (
    <div>
      {cellData.date}
      {', '}
      {cellData.time}
    </div>
  );
};

const optionRenderer = ({ rowData }) => {
  console.log('config', rowData);

  return <div>CONFIG</div>;
};

const headers = [
  {
    width: 150, accessor: 'fullName', header: 'Full name',
  },
  {
    width: 150, accessor: 'email', header: 'E-mail',
  },
  {
    width: 100, accessor: 'city', header: 'City',
  },
  {
    width: 150, accessor: 'rideInGroup', header: 'Ride in group',
  },
  {
    width: 150, accessor: 'daysOfWeek', header: 'Days of the week',
  },
  {
    width: 150, accessor: 'registrationDay', header: 'Registration day',
  },
  {
    width: 100, accessor: 'id', header: '',
  },
];

const headersWithCustomRenderers = [
  {
    width: 150, accessor: 'fullName', header: headerRenderer('Full name'), cell: cellRenderer,
  },
  {
    width: 150, accessor: 'email', header: headerRenderer('E-mail'), cell: cellRenderer,
  },
  {
    width: 100, accessor: 'city', header: headerRenderer('City'), cell: cellRenderer,
  },
  {
    width: 150, accessor: 'rideInGroup', header: headerRenderer('Ride in group'), cell: cellRenderer,
  },
  {
    width: 150, accessor: 'daysOfWeek', header: headerRenderer('Days of the week'), cell: cellRenderer,
  },
  {
    width: 150, accessor: 'registrationDay', header: headerRenderer('Registration day'), cell: timeRenderer,
  },
  {
    width: 100, accessor: 'id', header: '', cell: optionRenderer,
  },
];

storiesOf('Table', module)
  .add('default', () => <Table headers={headers} data={generateData(5)} />)
  .add('custom renderers', () => <Table headers={headersWithCustomRenderers} data={generateData2(5)} />)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Table headers={headers} data={generateData(5)} />
    </ThemeContext.Provider>
  ));
