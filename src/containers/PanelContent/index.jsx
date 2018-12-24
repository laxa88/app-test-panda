import React from 'react';

import ContentHelp from '../../components/ContentHelp';
import UserRegistration from '../Sections/UserRegistration';
import BikersTable from '../Sections/BikersTable';

import css from './index.css';

class PanelContent extends React.PureComponent {
  handleOnClickSave = () => {
    // todo
  };

  handleOnClickCancel = () => {
    // todo
  };

  handleOnClickDelete = () => {
    // todo
  };

  render() {
    return (
      <div className={css.body}>
        <ContentHelp />

        <UserRegistration
          onCancel={this.handleOnClickCancel}
          onSave={this.handleOnClickSave}
        />

        <BikersTable />
      </div>
    );
  }
}

export default PanelContent;
