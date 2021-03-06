import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

import { ThemeContext } from '../../theme';
import css from './index.css';

class ItemCategory extends React.PureComponent {
  render() {
    const { theme } = this.context;
    const { faIcon, text1, text2 } = this.props;

    return (
      <div className={css.body}>
        <div style={{ color: theme.primaryColor1 }} className={css.icon}>
          <FontAwesomeIcon icon={faIcon} />
        </div>

        <div>
          <div style={{ color: theme.textColor2 }} className={css.text1}>
            {text1}
          </div>

          <div style={{ color: theme.textColor1 }} className={css.text2}>
            {text2}
          </div>
        </div>
      </div>
    );
  }
}

ItemCategory.contextType = ThemeContext;

ItemCategory.propTypes = {
  faIcon: PropTypes.arrayOf(PropTypes.string).isRequired,
  text1: PropTypes.node.isRequired,
  text2: PropTypes.node.isRequired,
};

export default ItemCategory;
