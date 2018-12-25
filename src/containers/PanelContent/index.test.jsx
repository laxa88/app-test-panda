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

  it('triggers handleOnClickSave', () => {
    const result = renderer.create(<PanelContent />);

    const mockRowData = {
      fullName: 'dummy SW name',
      email: 'dummy_SW_name@starwarsfanboy.com',
      city: 'dummy SW name\'s city',
      rideInGroupIndex: 2,
      daysOfTheWeekIndices: [true, true, true, true, true, true, true],
      registrationDay: 'dummy format',
    };

    const mockTargetAddData = {
      fullName: 'target SW name',
      email: 'target_SW_name@starwarsfanboy.com',
      city: 'target SW name\'s city',
      rideInGroupIndex: 1,
      daysOfTheWeekIndices: [],
      registrationDay: 'target format',
    };

    const mockState = {
      tableData: [
        mockRowData,
        mockRowData,
      ],
    };

    const expected = {
      tableData: [
        mockRowData,
        mockRowData,
        mockTargetAddData,
      ],
    };

    result.getInstance().setState(mockState);

    result.getInstance().handleOnClickSave(mockTargetAddData);

    expect(result.getInstance().state).toEqual(expected);
  });

  it('triggers handleOnClickDelete', () => {
    const result = renderer.create(<PanelContent />);

    const mockRowData = {
      fullName: 'dummy SW name',
      email: 'dummy_SW_name@starwarsfanboy.com',
      city: 'dummy SW name\'s city',
      rideInGroupIndex: 2,
      daysOfTheWeekIndices: [true, true, true, true, true, true, true],
      registrationDay: 'dummy format',
    };

    const mockTargetDeleteData = {
      fullName: 'target SW name',
      email: 'target_SW_name@starwarsfanboy.com',
      city: 'target SW name\'s city',
      rideInGroupIndex: 1,
      daysOfTheWeekIndices: [],
      registrationDay: 'target format',
    };

    const mockState = {
      tableData: [
        mockRowData,
        mockRowData,
        mockTargetDeleteData,
        mockRowData,
      ],
    };

    const expected = {
      tableData: [
        mockRowData,
        mockRowData,
        mockRowData,
      ],
    };

    result.getInstance().setState(mockState);

    const mockData = { row: 2 };

    result.getInstance().handleOnClickDelete(mockData);

    expect(result.getInstance().state).toEqual(expected);
  });
});
