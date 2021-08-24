import React, { FC, useEffect, useState } from 'react';
import { render, screen } from '@testing-library/react';
import PercentageRule from '../PercentageRule';

describe('PercentageRule', () => {
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
  test('Pecentage rules for below negative value', () => {
    render(
      <PercentageRule
        disabled={false}
        typeValue={'negative'}
        value={'1.00'}
        onTypeChange={() => {}}
        onValueChange={() => {}}
        helperText={'Competitor Price'}
        options={spreadTypes}
        placeHolder={'0.00'}
        isError={false}
        hidePercentage={false}
        units={'%'}
      />
    );
    expect(screen.getByTestId('select-type')).toHaveValue('Below');
  });
  test('Pecentage rules for  match value', () => {
    render(
      <PercentageRule
        disabled={false}
        typeValue={'match'}
        value={'1.00'}
        onTypeChange={() => {}}
        onValueChange={() => {}}
        helperText={'Competitor Price'}
        options={spreadTypes}
        placeHolder={'0.00'}
        isError={false}
        hidePercentage={false}
        units={'%'}
      />
    );
    expect(screen.getByTestId('select-type')).toHaveValue('Match');
  });
  test('Pecentage rules for below with value 1.00 ', () => {
    render(
      <PercentageRule
        disabled={false}
        typeValue={'match'}
        value={'1.00'}
        onTypeChange={() => {}}
        onValueChange={() => {}}
        helperText={'Competitor Price'}
        options={spreadTypes}
        placeHolder={'0.00'}
        isError={false}
        hidePercentage={false}
        units={'%'}
      />
    );
    expect(screen.getByTestId('tex-val')).toHaveValue('1.00');
  });
});
