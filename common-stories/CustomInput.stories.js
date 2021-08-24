import React from 'react';

import CustomInput from '../../components/common/CustomInput';

export default {
  title: 'Wingman/Common',
  component: CustomInput
};

const Template = (args) => <CustomInput {...args} />;

export const customField = Template.bind({});
customField.args = {
  label: ''
};
