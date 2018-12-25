import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Table from '../../../components/Table';
import css from './index.css';

export const isWeekdays = cellData => cellData
  .slice(0, 5)
  .reduce((acc, val) => acc + (val ? 1 : 0), 0);

export const isWeekends = cellData => cellData
  .slice(5, 7)
  .reduce((acc, val) => acc + (val ? 1 : 0), 0);

export const printDays = cellData => cellData
  .reduce((acc, day, index) => {
    if (day) {
      acc.push(index);
    }
    return acc;
  }, [])
  .map((val) => {
    switch (val) {
      case 0:
        return 'Mon';
      case 1:
        return 'Tue';
      case 2:
        return 'Wed';
      case 3:
        return 'Thu';
      case 4:
        return 'Fri';
      case 5:
        return 'Sat';
      default:
      case 6:
        return 'Sun';
    }
  })
  .join(', ');

class BikersTable extends React.Component {
  constructor(props) {
    super(props);

    this.headers = [
      { width: 150, accessor: 'fullName', header: 'Full name' },
      { width: 150, accessor: 'email', header: 'E-mail' },
      { width: 100, accessor: 'city', header: 'City' },
      {
        width: 150,
        accessor: 'rideInGroupIndex',
        header: 'Ride in group',
        cell: this.cellRide,
      },
      {
        width: 150,
        accessor: 'daysOfTheWeekIndices',
        header: 'Days of the week',
        cell: this.cellDays,
      },
      {
        width: 150,
        accessor: 'registrationDay',
        header: 'Registration day',
        cell: this.cellTime,
      },
      {
        width: 100,
        accessor: '',
        header: '',
        cell: this.cellDelete,
      },
    ];
  }

  cellRide = ({ cellData }) => ['Always', 'Sometimes', 'Never'][cellData];

  cellDays = ({ cellData }) => {
    const weekdays = isWeekdays(cellData);
    const weekends = isWeekends(cellData);

    if (weekdays + weekends === 0) {
      return 'None';
    }

    if (weekdays + weekends === 7) {
      return 'Every day';
    }

    if (weekdays === 5 && !weekends) {
      return 'Week days';
    }

    if (!weekdays && weekends === 2) {
      return 'Weekends';
    }

    return printDays(cellData);
  };

  cellTime = ({ cellData }) => {
    const momentString = cellData;
    const date = moment(momentString).format('DD/MM/YYYY');
    const time = moment(momentString).format('hh:mmA');

    const result = (
      <div className={css.registrationCell}>
        <div className={css.registrationDate}>{date}</div>
        <div className={css.registrationTime}>{time}</div>
      </div>
    );

    return result;
  };

  cellDelete = data => (
    <button
      type="button"
      className={css.deleteIcon}
      onClick={this.handleOnClickDelete(data)}
    >
      <FontAwesomeIcon icon={['far', 'trash-alt']} />
    </button>
  );

  handleOnClickDelete = data => () => {
    const { onDelete } = this.props;
    onDelete(data);
  };

  render() {
    const { tableData } = this.props;

    return (
      <div>
        <h1>Bikers Table</h1>

        <Table className={css.table} headers={this.headers} data={tableData} />
      </div>
    );
  }
}

BikersTable.propTypes = {
  onDelete: PropTypes.func.isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      city: PropTypes.string,
      rideInGroup: PropTypes.string,
      daysOfWeek: PropTypes.string,
      registrationDay: PropTypes.string,
    }),
  ).isRequired,
};

export default BikersTable;
