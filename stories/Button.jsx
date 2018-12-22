/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button';
import { sakura, ThemeContext } from '../src/theme';

const callback = () => {
  window.alert('Clicked!');
};

storiesOf('Button', module)
  .add('default', () => <Button onClick={callback}>Click Me</Button>)
  .add('default disabled', () => (
    <Button onClick={callback} disabled>
      Click Me
    </Button>
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Button onClick={callback}>Click Me</Button>
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Button onClick={callback} disabled>
        Click Me
      </Button>
    </ThemeContext.Provider>
  ));
