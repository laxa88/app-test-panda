/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import InputWithInstructions from '../src/components/InputWithInstructions';
import { sakura, ThemeContext } from '../src/theme';

const instructions = 'Here are some extra instructions upon focus.';

storiesOf('InputWithInstructions', module)
  .add('default', () => <InputWithInstructions instructions={instructions} />)
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <InputWithInstructions instructions={instructions} />
    </ThemeContext.Provider>
  ));
