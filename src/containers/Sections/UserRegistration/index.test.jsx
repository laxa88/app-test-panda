import React from 'react';
import renderer from 'react-test-renderer';

import UserRegistration from './index';

describe('<UserRegistration />', () => {
  const getMockProps = () => ({
    onCancel: jest.fn(),
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

    expect(mockProps.onCancel).toHaveBeenCalled();
  });

  it('triggers handleOnClickSave', () => {
    const mockProps = getMockProps();

    const result = renderer.create(<UserRegistration {...mockProps} />);

    const mockState = {
      fullName: 'dummy fullName',
      email: 'dummy email',
      city: 'dummy city',
      rideInGroupIndex: 1,
      daysOfTheWeekIndices: [true, false, true],
    };

    result.getInstance().setState(mockState);

    const expected = {
      fullName: mockState.fullName,
      email: mockState.email,
      city: mockState.city,
      rideInGroup: { value: 1, label: 'Sometimes' },
      daysOfTheWeek: [
        { value: 0, label: 'Sun', checked: true },
        { value: 1, label: 'Mon', checked: false },
        { value: 2, label: 'Tue', checked: true },
        { value: 3, label: 'Wed', checked: false },
        { value: 4, label: 'Thu', checked: false },
        { value: 5, label: 'Fri', checked: false },
        { value: 6, label: 'Sat', checked: false },
      ],
    };

    result.getInstance().handleOnClickSave();

    expect(mockProps.onSave).toHaveBeenCalledWith(expected);
  });
});
