import React from 'react';

export const panda = {
  primaryColor: '#33A00E',
};

export const sakura = {
  primaryColor: 'pink',
};

export const ThemeContext = React.createContext({
  theme: panda,
});
