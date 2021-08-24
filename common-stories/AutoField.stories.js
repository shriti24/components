import React from 'react';

import AutoField from '../../components/common/ts/Autofield';

export default {
  title: 'Wingman/Common',
  component: AutoField
};

const Template = (args) => <AutoField {...args} />;

const data = {
  clubs: [
    { id: 4969, details: 'club1' },
    { id: 4533, details: 'club2' },
    { id: 4722, details: 'club3' },
    { id: 4805, details: 'club4' },
    { id: 4798, details: 'club5' },
    { id: 6202, details: 'club6' }
  ],
  items: [
    { id: 23, details: 'item1' },
    { id: 2429, details: 'item2' },
    { id: 2440, details: 'item3' },
    { id: 34, details: 'item4' }
  ],
  validClubs: [],
  validItems: []
};

export const autoField = Template.bind({});
autoField.args = {
  helperText: '',
  options: data.items,
  placeholderText: '',
  value: ['122', '1170', '200', '100'],
  notFoundItems: 'false'
};
export const autoFieldSuggestion = Template.bind({});
autoFieldSuggestion.args = {
  helperText: '',
  options: data.items,
  placeholderText: '',
  value: [100],
  notFoundItems: 'false'
};
