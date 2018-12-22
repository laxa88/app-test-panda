import React from 'react';

export const panda = {
  primaryColor1: '#33A00E', // for buttons, icons, links, etc.
  primaryColor2: '#C5DFBC', // for hover state
  primaryColor3: '#34A00F', // for active state or darker elements

  secondaryColor1: '#DDDDDD', // for cancel buttons
  secondaryColor2: '#999999', // for icons

  textColor1: '#333333', // main text
  textColor2: '#A4A4A4', // secondary text
};

export const sakura = {
  primaryColor1: '#ffc0cb',
  primaryColor2: '#ffe2e2',
  primaryColor3: '#ff9090',

  secondaryColor1: '#DDDDDD',
  secondaryColor2: '#999999',

  textColor1: '#6d0000',
  textColor2: '#ffe2e2',
};

export const currentTheme = panda;

export const ThemeContext = React.createContext({ theme: currentTheme });
