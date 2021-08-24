import React from 'react';

import DateField from '../../components/common/DateField';

export default {
  title: 'Wingman/Common',
  component: DateField
};

const Template = (args) => <DateField {...args} />;

export const dateField = Template.bind({});
dateField.args = {
  helperText: '',
  minDate: ''
};
