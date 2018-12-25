/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonPrimary from '../src/components/Button/ButtonPrimary';
import { sakura, ThemeContext } from '../src/theme';

const callback = () => {
  window.alert('Clicked!');
};

storiesOf('ButtonPrimary', module)
  .add('default', () => (
    <ButtonPrimary onClick={callback}>Click Me</ButtonPrimary>
  ))
  .add('default disabled', () => (
    <ButtonPrimary onClick={callback} disabled>
      Click Me
    </ButtonPrimary>
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ButtonPrimary onClick={callback}>Click Me</ButtonPrimary>
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <ButtonPrimary onClick={callback} disabled>
        Click Me
      </ButtonPrimary>
    </ThemeContext.Provider>
  ));
