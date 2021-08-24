import React from 'react';

import FormField from '../../components/common/FormField';

export default {
  title: 'Wingman/FormField',
  component: FormField
};

const Template = (args) => <FormField {...args} />;

export const formField = Template.bind({});
formField.args = {
  helperText: 'Base price',
  type: 'retail'
};
