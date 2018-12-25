import React from 'react';
import renderer from 'react-test-renderer';

import UserRegistration from './index';

jest.mock('moment', () => () => ({
  default: jest.fn().mockReturnThis(),
  format: () => 'dummy format',
}));

describe('<UserRegistration />', () => {
  const getMockProps = () => ({
    onSave: jest.fn(),
  });

  it('renders', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    expect(result.toJSON()).toMatchSnapshot();
  });

  it('triggers handleOnChangeFullName', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockEvent = {
      currentTarget: {
        value: 'dummy value',
      },
    };

    result.getInstance().handleOnChangeFullName(mockEvent);

    expect(result.getInstance().state.fullName).toBe(mockEvent.currentTarget.value);
  });

  it('triggers handleOnChangeEmail', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockEvent = {
      currentTarget: {
        value: 'dummy value',
      },
    };

    result.getInstance().handleOnChangeEmail(mockEvent);

    expect(result.getInstance().state.email).toBe(mockEvent.currentTarget.value);
  });

  it('triggers handleOnChangeCity', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockEvent = {
      currentTarget: {
        value: 'dummy value',
      },
    };

    result.getInstance().handleOnChangeCity(mockEvent);

    expect(result.getInstance().state.city).toBe(mockEvent.currentTarget.value);
  });

  it('triggers handleOnChangeRideInGroup', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockEvent = {
      index: 123,
    };

    result.getInstance().handleOnChangeRideInGroup(mockEvent);

    expect(result.getInstance().state.rideInGroupIndex).toBe(mockEvent.index);
  });

  it('triggers handleOnChangeDaysOfTheWeek', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockEvent = {
      checkedIndices: [true, false, true],
    };

    result.getInstance().handleOnChangeDaysOfTheWeek(mockEvent);

    expect(result.getInstance().state.daysOfTheWeekIndices).toBe(mockEvent.checkedIndices);
  });

  it('triggers handleOnClickCancel', () => {
    const mockProps = getMockProps();
    const result = renderer.create(<UserRegistration {...mockProps} />);

    result.getInstance().handleOnClickCancel();

    mockProps.onCancel = jest.fn();
    result.update(<UserRegistration {...mockProps} />);

    // result.getInstance().props.onCancel = mockCancel;

    result.getInstance().handleOnClickCancel();

    expect(mockProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('triggers handleOnClickSave', () => {
    const mockProps = getMockProps();

    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockState = {
      fullName: 'dummy fullName',
      email: 'dummy email',
      city: 'dummy city',
      rideInGroupIndex: 123,
      daysOfTheWeekIndices: [true, false, true],
      registrationDay: 'dummy format',
    };

    result.getInstance().setState(mockState);

    const expected = {
      fullName: mockState.fullName,
      email: mockState.email,
      city: mockState.city,
      rideInGroupIndex: mockState.rideInGroupIndex,
      daysOfTheWeekIndices: mockState.daysOfTheWeekIndices,
      registrationDay: mockState.registrationDay,
    };

    result.getInstance().handleOnClickSave();

    expect(mockProps.onSave).toHaveBeenCalledWith(expected);
  });
});
