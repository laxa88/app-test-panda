/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from '../src/components/Accordion';
import { sakura, ThemeContext } from '../src/theme';

const header = <div>This is a dummy header</div>;

const body = (
  <div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
      faucibus lacus, ut aliquet est. Sed et elit ex. Vestibulum nisl nisi,
      aliquam id justo sit amet, varius consequat diam. Vivamus at dui ornare
      enim ultricies sollicitudin ut non orci. Integer sagittis sapien et nisl
      maximus varius. In vitae maximus nulla, a tempus eros. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Phasellus ac magna vehicula enim vestibulum finibus sed ut sem.
      In hac habitasse platea dictumst. Donec porttitor nisi vitae quam dapibus,
      vel posuere purus mollis. Integer ut rhoncus odio.
    </div>

    <br />

    <div>
      Nulla sit amet facilisis dolor, sit amet sagittis ante. Nam non felis in
      ipsum lacinia blandit. Curabitur rhoncus, elit sed faucibus malesuada,
      arcu nisi sollicitudin eros, in porttitor lorem risus nec nunc. Etiam
      finibus ex sed justo ullamcorper, at aliquet quam porttitor. Vivamus
      rhoncus luctus sollicitudin. Duis tempor sodales diam, quis volutpat neque
      aliquet ut. Ut consectetur ultricies elementum. Vestibulum ac pretium
      ipsum.
    </div>
  </div>
);

storiesOf('Accordion', module)
  .add('default', () => <Accordion header={header} body={body} />)
  .add('default (opened)', () => (
    <Accordion header={header} body={body} isOpen />
  ))
  .add('sakura', () => (
    <ThemeContext.Provider value={{ theme: sakura }}>
      <Accordion header={header} body={body} />
    </ThemeContext.Provider>
  ));
