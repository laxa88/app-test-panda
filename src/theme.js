import React from 'react';

export const panda = {
  primaryColor: '#33A00E',
  secondaryColor: '#C5DFBC',
  tertiaryColor: '#DDDDDD',
  quaternaryColor: '#999999',
};

export const sakura = {
  primaryColor: 'pink',
  secondaryColor: 'orange',
  tertiaryColor: 'yellow',
  quaternaryColor: 'red',
};

export const currentTheme = panda;

export const ThemeContext = React.createContext({ theme: currentTheme });
