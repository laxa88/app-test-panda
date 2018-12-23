/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../src/components/Checkbox';
import { sakura, ThemeContext } from '../src/theme';

const onChange = (val) => {
  console.log('checked: ', val);
};

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox onChange={onChange} />)
  .add('default disabled', () => <Checkbox disabled onChange={onChange} />)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Checkbox onChange={onChange} />
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Checkbox disabled onChange={onChange} />
    </ThemeContext.Provider>
  ));
