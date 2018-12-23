import React from 'react';

import { ThemeContext } from '../../theme';
import ContentHelp from '../../components/ContentHelp';

import css from './index.css';

class PanelContent extends React.PureComponent {
  render() {
    const { theme } = this.context;

    return (
      <div className={css.body}>
        <ContentHelp />

        <div>TODO User Registration Form</div>

        <div>TODO Bikers Table</div>
      </div>
    );
  }
}

PanelContent.contextType = ThemeContext;

export default PanelContent;
