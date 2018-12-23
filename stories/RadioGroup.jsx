/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import RadioGroup from '../src/components/RadioGroup';
import { sakura, ThemeContext } from '../src/theme';

const options = [
  { value: 101, label: 'Tom' },
  { value: 201, label: 'Dick' },
  { value: 301, label: 'Harry' },
];

const onChange = (vals) => {
  console.log('selected: ', vals);
};

storiesOf('RadioGroup', module)
  .add('default', () => <RadioGroup onChange={onChange} options={options} />)
  .add('default (preselected)', () => (
    <RadioGroup onChange={onChange} options={options} checkedIndex={1} />
  ))
  .add('default disabled', () => (
    <RadioGroup disabled onChange={onChange} options={options} />
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <RadioGroup onChange={onChange} options={options} />
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <RadioGroup disabled onChange={onChange} options={options} />
    </ThemeContext.Provider>
  ));
