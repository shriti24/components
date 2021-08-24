import React from 'react';

import CardField from '../../components/common/CardField';

export default {
  title: 'Wingman/Common',
  component: CardField
};

const Template = (args) => <CardField {...args} />;

export const cardField = Template.bind({});
cardField.args = {
  selected: '#E9F5FF',
  checked: false,
  indeterminate: false,
  id: '',
  desc: '',
  addDesc: '',
  addDesc2: '',
  hideSideArrow: true
};
