/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../src/components/Input';
import { sakura, ThemeContext } from '../src/theme';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('default disabled', () => <Input disabled />)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Input />
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Input disabled />
    </ThemeContext.Provider>
  ));
