import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './index.css';
import Link from '../../components/Link';
import { ThemeContext } from '../../theme';

class PanelBreadcrumb extends React.PureComponent {
  render() {
    const { theme } = this.context;

    return (
      <div className={css.body}>
        <FontAwesomeIcon
          className={css.homeIcon}
          color={theme.primaryColor1}
          icon={['fas', 'home']}
        />

        <FontAwesomeIcon
          className={css.arrow}
          icon={['fas', 'chevron-right']}
        />

        <Link className={css.link} href="/">
          Page 1
        </Link>

        <FontAwesomeIcon
          className={css.arrow}
          icon={['fas', 'chevron-right']}
        />

        <Link className={css.link} href="/">
          Breadcrumb
        </Link>

        <FontAwesomeIcon
          className={css.arrow}
          icon={['fas', 'chevron-right']}
        />

        <Link className={css.link} href="/" disabled>
          Current page
        </Link>
      </div>
    );
  }
}

PanelBreadcrumb.contextType = ThemeContext;

export default PanelBreadcrumb;
