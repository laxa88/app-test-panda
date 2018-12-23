/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from '../src/components/Label';
import { sakura, ThemeContext } from '../src/theme';

const text = 'This is a label text';

storiesOf('Label', module)
  .add('default', () => <Label text={text}>Hello World</Label>)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Label text={text}>Hello World</Label>
    </ThemeContext.Provider>
  ));
