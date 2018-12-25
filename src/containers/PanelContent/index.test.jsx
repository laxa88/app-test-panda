import React from 'react';
import renderer from 'react-test-renderer';

import PanelContent, { generateTableData } from './index';

// Mock away the randomness
const mockMath = Object.create(global.Math);

// Note:
// - causes rideInGroupIndex to be "2" due to "(0.8 * 10) % 3"
// - causes daysOfTheWeekIndices to be "true" due to "> 0.5"
mockMath.random = () => 0.8;

global.Math = mockMath;

jest.mock('moment', () => () => ({
  default: jest.fn().mockReturnThis(),
  format: () => 'dummy format',
}));

jest.mock('starwars-names', () => ({
  random: jest.fn().mockReturnValue('dummy SW name'),
}));

describe('<PanelContent />', () => {
  it('renders', () => {
    const result = renderer.create(<PanelContent />);

    expect(result.root.children[0].children.length).toBe(3);
  });

  it('generateTableData returns correctly', () => {
    const expectedStarWarsName = 'dummy SW name';
    const expectedStarwarsEmail = 'dummy_SW_name@starwarsfanboy.com';
    const expectedCity = 'dummy SW name\'s city';
    const expectedRideInGroupIndex = 2;
    const expectedDaysOfTheWeekIndices = [true, true, true, true, true, true, true];
    const expectedRegistrationDay = 'dummy format';

    const expected = [
      {
        fullName: expectedStarWarsName,
        email: expectedStarwarsEmail,
        city: expectedCity,
        rideInGroupIndex: expectedRideInGroupIndex,
        daysOfTheWeekIndices: expectedDaysOfTheWeekIndices,
        registrationDay: expectedRegistrationDay,
      },
      {
        fullName: expectedStarWarsName,
        email: expectedStarwarsEmail,
        city: expectedCity,
        rideInGroupIndex: expectedRideInGroupIndex,
        daysOfTheWeekIndices: expectedDaysOfTheWeekIndices,
        registrationDay: expectedRegistrationDay,
      },
    ];

    const result = generateTableData(2);

    expect(result).toEqual(expected);
  });
});
