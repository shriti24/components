import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { jest } from '@jest/globals';
import UploadFile from './';

describe('UploadFile Component', () => {
  test('Renders Drag and Drop Section', () => {
    render(<UploadFile handleFile={() => {}} />);
    expect(screen.getByText('Drag and drop files here')).toBeInTheDocument();
  });

  test('Renders Select file button', () => {
    render(<UploadFile handleFile={() => {}} />);
    expect(screen.getByText('Select File')).toBeInTheDocument();
  });

  test('handleFile is called when user select a file', () => {
    const handleFileMock = jest.fn();
    render(<UploadFile handleFile={handleFileMock} />);
    const event = {
      target: {
        files: ['test', 'test', 'test']
      }
    };
    const input = screen.getByTestId('fileInput');
    fireEvent.change(input, event);
    expect(handleFileMock).toBeCalled();
  });

  test('handleFile is called when user drops a file', () => {
    const handleFileMock = jest.fn();
    render(<UploadFile handleFile={handleFileMock} />);
    const mockFile = {
      dataTransfer: {
        files: ['test', 'test', 'test']
      }
    };
    const dragAndDropComponent = screen.getByText('Drag and drop files here');
    fireEvent.drop(dragAndDropComponent, mockFile);
    expect(handleFileMock).toBeCalled();
  });

  test('when the user dragEnter a file, the component has drag styling', () => {
    render(<UploadFile handleFile={() => {}} />);
    const mockFile = {
      dataTransfer: {
        items: ['test', 'test', 'test']
      }
    };
    const container = screen.getByTestId('container');
    const dragAndDropComponent = screen.getByText('Drag and drop files here');

    fireEvent.dragEnter(dragAndDropComponent, mockFile);
    expect(container.classList.contains('draggedContainer')).toBe(true);
  });

  test('when the user dragLeave a file, the component has no drag styling', () => {
    render(<UploadFile handleFile={() => {}} />);
    const mockFile = {
      dataTransfer: {
        files: ['test', 'test', 'test']
      }
    };
    const container = screen.getByTestId('container');
    const dragAndDropComponent = screen.getByText('Drag and drop files here');

    fireEvent.dragLeave(dragAndDropComponent, mockFile);
    expect(container.classList.contains('container')).toBe(true);
  });

  test('if click in select file button, event is handled', () => {
    const handleFileMock = jest.fn();
    render(<UploadFile handleFile={handleFileMock} />);
    const selectButton = screen.getByText('Select File');
    fireEvent.click(selectButton);
    expect(screen.getByText('Select File')).toBeInTheDocument();
  });
});
