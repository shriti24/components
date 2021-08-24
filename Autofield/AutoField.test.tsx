import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AutoField from './';

describe('AutoField Component', () => {
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

  test('Render helper text', () => {
    render(
      <AutoField
        value={[4969, 4533]}
        onChange={() => {}}
        helperText={'Select Clubs'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.clubs}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={() => {}}
      />
    );
    expect(screen.getByText('Select Clubs')).toBeInTheDocument();
  });
  test('Render Tag Value', () => {
    render(
      <AutoField
        value={[4969, 4533]}
        onChange={() => {}}
        helperText={'Select Clubs'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.clubs}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={() => {}}
      />
    );
    expect(screen.getByText('4969')).toBeInTheDocument();
  });
  test('Render items', () => {
    const handleChange = jest.fn();
    render(
      <AutoField
        value={[23, 100]}
        onChange={() => {}}
        helperText={'Select Items'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.items}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={handleChange}
      />
    );
    const input = screen.getByTestId('input');
    fireEvent.keyDown(input, { target: { value: '100' } });
    expect(handleChange).toBeCalled();
  });
  test('Handle Enter keyUp', () => {
    const handleChange = jest.fn();
    render(
      <AutoField
        value={[23, 100]}
        onChange={() => {}}
        helperText={'Select Items'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.items}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={handleChange}
      />
    );
    const input = screen.getByTestId('input');
    fireEvent.keyDown(input, { key: 'Enter', target: { value: '100' } });
    expect(handleChange).toBeCalled();
  });
  test('Handle change', () => {
    const handleChange = jest.fn();
    render(
      <AutoField
        value={[23, 100]}
        onChange={() => {}}
        helperText={'Select Items'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.items}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={handleChange}
      />
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '100' } });
    expect(screen.getByText('100')).toBeInTheDocument();
  });
  test('Handle paste from clipboard', () => {
    const handleChange = jest.fn();
    render(
      <AutoField
        value={[23, 100]}
        onChange={handleChange}
        helperText={'Select Items'}
        onDelete={() => {}}
        onClear={() => {}}
        options={data.items}
        placeholderText={'Paste club numbers or search'}
        notFoundItems={[]}
        focused={false}
        updateSuggestions={() => {}}
      />
    );
    const mockEvent = {
      clipboardData: {
        getData: () => '1111, 2222, 3333'
      }
    };
    const input = screen.getByTestId('input');
    fireEvent.paste(input, mockEvent);
    expect(handleChange).toBeCalled();
  });
});
