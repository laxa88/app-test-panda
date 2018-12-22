/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from '../src/components/Link';
import { sakura, ThemeContext } from '../src/theme';

storiesOf('Link', module)
  .add('default', () => <Link href="http://google.com">Default Link</Link>)
  .add('default disabled', () => (
    <Link href="http://google.com" disabled>
      Disabled Link
    </Link>
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Link href="http://google.com">Default Link</Link>
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Link href="http://google.com" disabled>
        Disabled Link
      </Link>
    </ThemeContext.Provider>
  ));
