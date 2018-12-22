import React from 'react';

import css from './index.css';
import MenuApp from '../../components/MenuApp';
import MenuUser from '../../components/MenuUser';

const PanelTop = () => (
  <div className={css.body}>
    <MenuApp />
    <MenuUser />
  </div>
);

export default PanelTop;
