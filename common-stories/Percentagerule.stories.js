import React from 'react';

import PercentageRule from '../../components/common/ts/PercentageRule';

export default {
  title: 'Wingman/PercentageRule',
  component: PercentageRule
};

const spreadTypes = [
  {
    value: 'negative',
    label: 'Below'
  },
  {
    value: 'match',
    label: 'Match'
  },
  {
    value: 'positive',
    label: 'Above'
  }
];
const Template = (args) => <PercentageRule {...args} />;

export const percentagerule = Template.bind({});
percentagerule.args = {
  disabled: false,
  typeValue: 'match',
  value: '  0.00',
  onTypeChange: () => {
    console.warn();
  },
  onValueChange: () => {},
  helperText: 'Competitor Price',
  options: spreadTypes,
  placeHolder: '0.00',
  isError: false,
  hidePercentage: false,
  units: '%'
};
