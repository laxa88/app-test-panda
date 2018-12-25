import PropTypes from 'prop-types';
import React from 'react';

import Label from '../../../components/Label';
import InputWithInstructions from '../../../components/InputWithInstructions';
import RadioGroup from '../../../components/RadioGroup';
import CheckboxGroup from '../../../components/CheckboxGroup';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import ButtonSecondary from '../../../components/Button/ButtonSecondary';
import css from './index.css';

const rideInGroupOptions = [
  { value: 0, label: 'Always' },
  { value: 1, label: 'Sometimes' },
  { value: 2, label: 'Never' },
];

const daysOfTheWeekOptions = [
  { value: 0, label: 'Sun' },
  { value: 1, label: 'Mon' },
  { value: 2, label: 'Tue' },
  { value: 3, label: 'Wed' },
  { value: 4, label: 'Thu' },
  { value: 5, label: 'Fri' },
  { value: 6, label: 'Sat' },
];

class UserRegistration extends React.Component {
  state = {
    fullName: '',
    email: '',
    city: '',
    rideInGroupIndex: null,
    daysOfTheWeekIndices: [],
  };

  handleOnChangeFullName = (e) => {
    this.setState({ fullName: e.currentTarget.value });
  };

  handleOnChangeEmail = (e) => {
    this.setState({ email: e.currentTarget.value });
  };

  handleOnChangeCity = (e) => {
    this.setState({ city: e.currentTarget.value });
  };

  handleOnChangeRideInGroup = ({ index }) => {
    this.setState({ rideInGroupIndex: index });
  };

  handleOnChangeDaysOfTheWeek = ({ checkedIndices }) => {
    this.setState({ daysOfTheWeekIndices: checkedIndices });
  };

  handleOnClickCancel = () => {
    const { onCancel } = this.props;

    onCancel();
  };

  handleOnClickSave = () => {
    const { onSave } = this.props;

    const {
      fullName,
      email,
      city,
      rideInGroupIndex,
      daysOfTheWeekIndices,
    } = this.state;

    const payload = {
      fullName,
      email,
      city,
      rideInGroup: rideInGroupOptions[rideInGroupIndex],
      daysOfTheWeek: daysOfTheWeekOptions.map((item, index) => ({
        value: item.value,
        label: item.label,
        checked: !!daysOfTheWeekIndices[index],
      })),
    };

    onSave(payload);
  };

  render() {
    const {
      fullName,
      email,
      city,
      rideInGroupIndex,
      daysOfTheWeekIndices,
    } = this.state;

    return (
      <div>
        <h1>User Registration</h1>

        <div className={css.leftSection}>
          <Label text="Full name">
            <InputWithInstructions
              value={fullName}
              onChange={this.handleOnChangeFullName}
              instructions="Enter your full name here"
            />
          </Label>

          <Label text="E-mail">
            <InputWithInstructions
              value={email}
              onChange={this.handleOnChangeEmail}
              instructions="Enter your email here"
            />
          </Label>

          <Label text="City">
            <InputWithInstructions
              value={city}
              onChange={this.handleOnChangeCity}
              instructions="Enter your city here"
            />
          </Label>
        </div>

        <div className={css.rightSection}>
          <div className={css.optionsSection}>
            <Label text="Ride in a group?">
              <RadioGroup
                checkedIndex={rideInGroupIndex}
                options={rideInGroupOptions}
                onChange={this.handleOnChangeRideInGroup}
              />
            </Label>

            <Label text="Ride in a group?">
              <CheckboxGroup
                checkedIndices={daysOfTheWeekIndices}
                options={daysOfTheWeekOptions}
                onChange={this.handleOnChangeDaysOfTheWeek}
              />
            </Label>
          </div>

          <div className={css.buttonsSection}>
            <ButtonSecondary onClick={this.handleOnClickCancel}>Cancel</ButtonSecondary>
            <ButtonPrimary onClick={this.handleOnClickSave}>Save</ButtonPrimary>
          </div>
        </div>
      </div>
    );
  }
}

UserRegistration.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default UserRegistration;
