/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckboxGroup from '../src/components/CheckboxGroup';
import { sakura, ThemeContext } from '../src/theme';

const options = [
  { value: 101, label: 'Tom' },
  { value: 201, label: 'Dick' },
  { value: 301, label: 'Harry' },
  { value: 401, label: 'Barry' },
];

const checkedIndices = [true, false, undefined, true];

const onChange = (vals) => {
  console.log('onChange: ', vals);
};

storiesOf('CheckboxGroup', module)
  .add('default', () => <CheckboxGroup onChange={onChange} options={options} />)
  .add('default (preselected)', () => (
    <CheckboxGroup onChange={onChange} options={options} checkedIndices={checkedIndices} />
  ))
  .add('default disabled', () => (
    <CheckboxGroup disabled onChange={onChange} options={options} />
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <CheckboxGroup onChange={onChange} options={options} />
    </ThemeContext.Provider>
  ))
  .add('sakura disabled', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <CheckboxGroup disabled onChange={onChange} options={options} />
    </ThemeContext.Provider>
  ));
