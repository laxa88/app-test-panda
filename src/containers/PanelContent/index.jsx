import moment from 'moment';
import names from 'starwars-names';
import React from 'react';

import ContentHelp from '../../components/ContentHelp';
import UserRegistration from '../Sections/UserRegistration';
import BikersTable from '../Sections/BikersTable';

import css from './index.css';

export const generateTableData = (count) => {
  const items = [];

  for (let i = 0; i < count; i += 1) {
    const name = names.random();

    const rideInGroupIndex = Math.floor((Math.random() * 10) % 3);

    const daysOfTheWeekIndices = [0, 0, 0, 0, 0, 0, 0].map(() => Math.random() > 0.5);

    const startDate = new Date(2016, 1, 1).getTime();
    const endDate = new Date().getTime();
    const registrationDay = new Date(startDate + Math.random() * (endDate - startDate));

    items.push({
      fullName: name,
      email: `${name.replace(/\s/g, '_')}@starwarsfanboy.com`,
      city: `${name}'s city`,
      rideInGroupIndex,
      daysOfTheWeekIndices,
      registrationDay: moment(registrationDay).format(),
    });
  }

  return items;
};

class PanelContent extends React.PureComponent {
  state = {
    tableData: generateTableData(6),
  };

  handleOnClickSave = () => {
    console.log('save');
  };

  handleOnClickCancel = () => {
    console.log('cancel');
  };

  handleOnClickDelete = () => {
    console.log('delete');
  };

  render() {
    const { tableData } = this.state;

    return (
      <div className={css.body}>
        <ContentHelp isOpen />

        <UserRegistration
          onCancel={this.handleOnClickCancel}
          onSave={this.handleOnClickSave}
        />

        <BikersTable
          onDelete={this.handleOnClickDelete}
          tableData={tableData}
        />
      </div>
    );
  }
}

export default PanelContent;
