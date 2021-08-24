import React from 'react';

import ClubField from '../../components/common/ClubField';

export default {
  title: 'Wingman/Common',
  component: ClubField
};

const Template = (args) => <ClubField {...args} />;

export const clubField = Template.bind({});
clubField.args = {
  helperText: '',
  type: ''
};
