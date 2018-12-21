import React from 'react';

import PanelBreadcrumb from './containers/PanelBreadcrumb';
import PanelCategory from './containers/PanelCategory';
import PanelContent from './containers/PanelContent';
import PanelTop from './containers/PanelTop';

const App = () => (
  <div>
    <PanelTop />
    <PanelBreadcrumb />
    <PanelCategory />
    <PanelContent />
  </div>
);

export default App;
