/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemCategory from '../src/components/ItemCategory';
import { sakura, ThemeContext } from '../src/theme';

storiesOf('ItemCategory', module)
  .add('default', () => (
    <ItemCategory
      faIcon={['fas', 'puzzle-piece']}
      text1="Sub-text goes here"
      text2="Main text goes here"
    />
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ItemCategory
        faIcon={['fas', 'puzzle-piece']}
        text1="Sub-text goes here"
        text2="Main text goes here"
      />
    </ThemeContext.Provider>
  ));
