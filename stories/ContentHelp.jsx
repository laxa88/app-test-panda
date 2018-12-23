/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentHelp from '../src/components/ContentHelp';
import { sakura, ThemeContext } from '../src/theme';

storiesOf('ContentHelp', module)
  .add('default', () => <ContentHelp />)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ContentHelp />
    </ThemeContext.Provider>
  ));
