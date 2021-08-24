import React from 'react';

import CustomTablePagination from '../../components/common/CustomTablePagination';

export default {
  title: 'Wingman/Common',
  component: CustomTablePagination
};

const Template = (args) => <CustomTablePagination {...args} />;

const baseData = [
  {
    compId: 0,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 2
  },
  {
    compId: 1,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 1
  },
  {
    compId: 2,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 2
  },
  {
    compId: 3,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 1
  },
  {
    compId: 4,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 2
  },
  {
    compId: 5,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 2
  },
  {
    compId: 6,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 2345,
    itemNbr: 2
  },
  {
    compId: 7,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4298,
    itemNbr: 3
  },
  {
    compId: 8,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 2345,
    itemNbr: 2
  },
  {
    compId: 9,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 2345,
    itemNbr: 2
  },
  {
    compId: 10,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 2345,
    itemNbr: 2
  },
  {
    compId: 11,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4298,
    itemNbr: 1
  },
  {
    compId: 12,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 2
  },
  {
    compId: 13,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4298,
    itemNbr: 1
  },
  {
    compId: 14,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4298,
    itemNbr: 1
  },
  {
    compId: 15,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 3
  },
  {
    compId: 16,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4298,
    itemNbr: 3
  },
  {
    compId: 17,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 4
  },
  {
    compId: 18,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 1
  },
  {
    compId: 19,
    code: 'COO',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 3356,
    itemNbr: 4
  },
  {
    compId: 20,
    code: 'AMZ',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 2345,
    itemNbr: 3
  },
  {
    compId: 21,
    code: 'COS',
    competitor: 'COSTCO',
    defaultRule: 'Gap 1.25% | Floor 2.99%',
    clubNbr: 4969,
    itemNbr: 2
  }
];

export const customTablePaginationField = Template.bind({});
customTablePaginationField.args = {
  page: 1,
  count: baseData.length,
  rowsPerPage: 10
};
