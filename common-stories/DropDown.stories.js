import React from 'react';

import DropDown from '../../components/common/DropDown';

export default {
  title: 'Wingman/Common',
  component: DropDown
};

const Template = (args) => <DropDown {...args} />;

const data = {
  reason: [
    {
      value: 'PGG',
      label: 'Profit go get'
    },
    {
      value: 'COM',
      label: 'Competitor'
    },
    {
      value: 'PI',
      label: 'Price Investment'
    },
    {
      value: 'MP',
      label: 'Maintain PB/ NB price gap'
    },
    {
      value: 'MD',
      label: 'Markdown'
    },
    {
      value: 'CC',
      label: 'Cost change'
    }
  ],
  retail: '',
  markdownReason: [
    {
      value: 'OS',
      label: 'Over stock'
    },
    {
      value: 'SE',
      label: 'Season ending'
    },
    {
      value: 'ADD',
      label: 'Assortment driven discontinuation'
    },
    {
      value: 'DG',
      label: 'Dated goods'
    },
    {
      value: 'LT1',
      label: 'Last ones'
    },
    {
      value: 'SF',
      label: 'Supplier funded'
    },
    {
      value: 'EOL',
      label: 'End of life'
    }
  ]
};

export const dropdownField = Template.bind({});
dropdownField.args = {
  helperText: 'Title',
  options: data.reason,
  value: data.reason,
  secondButtonText: 'Button2'
};
