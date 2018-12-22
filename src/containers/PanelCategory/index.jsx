import React from 'react';

import css from './index.css';
import ItemCategory from '../../components/ItemCategory';
import { ThemeContext } from '../../theme';

class PanelCategory extends React.PureComponent {
  render() {
    const { theme } = this.context;

    return (
      <div className={css.body}>
        <div className={css.left}>
          <ItemCategory
            faIcon={['fas', 'puzzle-piece']}
            text1="Sector"
            text2="Sports"
          />

          <ItemCategory
            faIcon={['far', 'futbol']}
            text1="Sport Type"
            text2="Bicycles"
          />

          <ItemCategory
            faIcon={['fas', 'bicycle']}
            text1="Mode"
            text2="Mountain Cross"
          />
        </div>

        <div className={css.right}>
          <ThemeContext.Provider
            value={{
              theme: {
                ...theme,
                quaternaryColor: theme.primaryColor,
              },
            }}
          >
            <ItemCategory
              faIcon={['fas', 'recycle']}
              text1="Responsibility"
              text2="Go Green!"
            />
          </ThemeContext.Provider>
        </div>
      </div>
    );
  }
}

PanelCategory.contextType = ThemeContext;

export default PanelCategory;
