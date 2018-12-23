import React from 'react';

export const panda = {
  primaryColor1: '#33A00E', // for buttons, icons, links
  primaryColor2: '#C5DFBC', // for hover state
  primaryColor3: '#34A00F', // for backgrounds

  secondaryColor1: '#DDDDDD', // for cancel buttons
  secondaryColor2: '#999999', // for icons, borders
  secondaryColor3: '#F0F0F0', // for backgrounds

  textColor1: '#333333', // main text
  textColor2: '#A4A4A4', // secondary text
};

export const sakura = {
  primaryColor1: '#ffc0cb',
  primaryColor2: '#ffe2e2',
  primaryColor3: '#ff9090',

  secondaryColor1: '#DDDDDD',
  secondaryColor2: '#999999',
  secondaryColor3: '#F0F0F0',

  textColor1: '#6d0000',
  textColor2: '#ffe2e2',
};

export const currentTheme = panda;

export const ThemeContext = React.createContext({ theme: currentTheme });
