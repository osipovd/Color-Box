import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('calls addBox function with the correct box data when the form is submitted', () => {
  const addBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);

  const widthInput = getByLabelText('Width (inches):');
  const heightInput = getByLabelText('Height (inches):');
  const bgColorInput = getByLabelText('Background Color:');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '3' } });
  fireEvent.change(heightInput, { target: { value: '4' } });
  fireEvent.change(bgColorInput, { target: { value: 'blue' } });
  fireEvent.click(addButton);

  expect(addBox).toHaveBeenCalledTimes(1);
  expect(addBox).toHaveBeenCalledWith({
    width: 288, // Converted from 3 inches to pixels (assuming 96 DPI)
    height: 384, // Converted from 4 inches to pixels (assuming 96 DPI)
    backgroundColor: 'blue',
  });
});
