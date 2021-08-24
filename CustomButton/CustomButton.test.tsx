import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import CustomButton from './';

describe('CustomButton Component', () => {
  test('Render Button Text', () => {
    render(
      <CustomButton disabled={false} type={'primary'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Handle Button Click', () => {
    const handleClick = jest.fn();
    render(
      <CustomButton disabled={false} type={'secondary'} onClick={handleClick}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
  });
  test('Primary button is getting primaryButton className', () => {
    render(
      <CustomButton disabled={false} type={'primary'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('primaryButton');
  });
  test('Disabled button is getting disabledButton className', () => {
    render(
      <CustomButton disabled={true} type={'secondary'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('disabledButton');
  });
  test('Secondary button is getting secondaryButton className', () => {
    render(
      <CustomButton disabled={false} type={'secondary'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('secondaryButton');
  });
  test('Custom button is getting customButton className', () => {
    render(
      <CustomButton disabled={true} type={'primary'} variant={'contained'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('disabledContainedButton');
  });
  test('Custom button is getting customButton className', () => {
    render(
      <CustomButton disabled={true} type={'primary'} variant={'outlined'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('disabledOutlinedButton');
  });
  test('Text button is getting textButton className', () => {
    render(
      <CustomButton disabled={false} type={'text'} variant={'textVariant'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('textButton');
  });
  test('Disabled text button is getting disabledTextButton className', () => {
    render(
      <CustomButton disabled={true} type={'text'} variant={'textVariant'} onClick={() => {}}>
        Test
      </CustomButton>
    );
    const button = screen.getByTestId('Test');
    expect(button.className).toBe('disabledTextButton');
  });
});
