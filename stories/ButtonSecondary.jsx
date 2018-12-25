/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonSecondary from '../src/components/Button/ButtonSecondary';
import { sakura, ThemeContext } from '../src/theme';

const callback = () => {
  window.alert('Clicked!');
};

storiesOf('ButtonSecondary', module)
  .add('default', () => (
    <ButtonSecondary onClick={callback}>Click Me</ButtonSecondary>
  ))
  .add('default disabled', () => (
    <ButtonSecondary onClick={callback} disabled>
      Click Me
    </ButtonSecondary>
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ButtonSecondary onClick={callback}>Click Me</ButtonSecondary>
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ButtonSecondary onClick={callback} disabled>
        Click Me
      </ButtonSecondary>
    </ThemeContext.Provider>
  ));
