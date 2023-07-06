import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

test('renders Box component with correct dimensions and background color', () => {
  const width = 200;
  const height = 150;
  const backgroundColor = 'red';
  const removeBox = jest.fn();

  const { getByTestId } = render(
    <Box
      index={0}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      removeBox={removeBox}
    />
  );

  const box = getByTestId('box');
  expect(box).toHaveStyle(`width: ${width}px`);
  expect(box).toHaveStyle(`height: ${height}px`);
  expect(box).toHaveStyle(`background-color: ${backgroundColor}`);
});

test('calls removeBox function when the remove button is clicked', () => {
  const removeBox = jest.fn();
  const { getByText } = render(
    <Box
      index={0}
      width={200}
      height={150}
      backgroundColor="red"
      removeBox={removeBox}
    />
  );

  const removeButton = getByText('X');
  fireEvent.click(removeButton);

  expect(removeBox).toHaveBeenCalledTimes(1);
  expect(removeBox).toHaveBeenCalledWith(0);
});
