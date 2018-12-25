import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../theme';

const StyledTable = styled.table`
  border: none;
  border-spacing: 0;
  text-align: left;

  & thead {
    background-color: ${props => props.theme.primaryColor1};
  }

  & th {
    border-bottom: 1px solid ${props => props.theme.primaryColor3};
  }

  & tbody tr {
    transition: background-color 0.15s ease;
  }

  & tbody tr:nth-child(even) {
    background-color: ${props => props.theme.secondaryColor3};
  }

  & tbody tr:hover {
    background-color: ${props => props.theme.primaryColor2};
  }
`;

class Table extends React.Component {
  renderHeaders = () => {
    const { headers } = this.props;

    const elements = [];

    for (let i = 0; i < headers.length; i += 1) {
      const headerData = headers[i];
      const headerValue = headers[i].header;

      const r = typeof headerValue === 'function'
        ? headerValue(headerData)
        : headerValue;

      elements.push(<th key={`header-${i}`}>{r}</th>);
    }

    return elements;
  };

  renderRows = () => {
    const { headers, data } = this.props;

    const rows = [];

    for (let row = 0; row < data.length; row += 1) {
      const rowData = data[row];
      const cells = [];

      for (let col = 0; col < headers.length; col += 1) {
        const headerData = headers[col];

        const cellData = rowData[headerData.accessor];
        const cellRenderer = headerData.cell;

        const r = typeof cellRenderer === 'function'
          ? cellRenderer({
            rowData,
            cellData,
            row,
            col,
          })
          : cellData;

        cells.push(<td key={`cell-${col}`}>{r}</td>);
      }

      rows.push(<tr key={`row-${row}`}>{cells}</tr>);
    }

    return rows;
  };

  render() {
    const { theme } = this.context;
    const { headers, data, ...others } = this.props;

    return (
      <StyledTable theme={theme} {...others}>
        <thead>
          <tr>{this.renderHeaders()}</tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </StyledTable>
    );
  }
}

Table.contextType = ThemeContext;

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      accessor: PropTypes.string,
      header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    }),
  ).isRequired,

  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Table;
