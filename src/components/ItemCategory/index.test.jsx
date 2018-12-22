import React from 'react';
import renderer from 'react-test-renderer';

import { ThemeContext } from '../../theme';
import ItemCategory from './index';

describe('<ItemCategory />', () => {
  it('renders (default)', () => {
    const mockTheme = {
      primaryColor: 'dummy-color-1',
      secondaryColor: 'dummy-color-2',
      tertiaryColor: 'dummy-color-3',
      quaternaryColor: 'dummy-color-4',
    };

    const mockProps = {
      faIcon: ['dummy-prefix', 'dummy-icon'],
      text1: 'dummy text 1',
      text2: 'dummy text 2',
    };

    const result = renderer.create(
      <ThemeContext.Provider value={{ theme: mockTheme }}>
        <ItemCategory {...mockProps} />
      </ThemeContext.Provider>,
    );

    const icon = result.root.findByProps({ className: 'icon' });
    const text1 = result.root.findByProps({ className: 'text1' });
    const text2 = result.root.findByProps({ className: 'text2' });

    expect(icon.props.color).toBe(mockTheme.quaternaryColor);
    expect(icon.props.icon).toBe(mockProps.faIcon);

    expect(text1.props.style.color).toBe(mockTheme.tertiaryColor);
    expect(text1.props.children).toBe(mockProps.text1);

    expect(text2.props.style.color).toBe(mockTheme.quaternaryColor);
    expect(text2.props.children).toBe(mockProps.text2);
  });
});
