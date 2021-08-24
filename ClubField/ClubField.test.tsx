import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import ClubField from './';

describe('ClubField', () => {
  test('Display HelperText correctly', () => {
    render(
      <ClubField value="9.99" onChange={() => {}} helperText="HelperText Test" type="retail" />
    );
    expect(screen.getByText('HelperText Test')).toBeInTheDocument();
  });
  test('Display Decoration correctly', () => {
    render(
      <ClubField value="0.91" onChange={() => {}} helperText="HelperText Test" type="retail" />
    );
    expect(screen.getByText('$')).toBeInTheDocument();
  });
  test('OnChange prop is called when the input changes', () => {
    const onChangeTest = jest.fn();
    render(
      <ClubField value="0.91" onChange={onChangeTest} helperText="HelperText Test" type="retail" />
    );
    const input = screen.getByTestId('ClubFieldInput');
    fireEvent.change(input, { target: { value: '' } });
    expect(onChangeTest).toBeCalled();
  });
  test('OnChange prop is called when the input blur', () => {
    const onBlurTest = jest.fn();
    render(
      <ClubField value="0.91" onChange={onBlurTest} helperText="HelperText Test" type="retail" />
    );
    const input = screen.getByTestId('ClubFieldInput');
    fireEvent.blur(input, { target: { value: 1 } });
    expect(onBlurTest).toBeCalled();
  });
});
