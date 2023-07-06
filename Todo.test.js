import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component with correct task', () => {
  const todo = {
    id: 1,
    task: 'Finish homework',
  };
  const removeTodo = jest.fn();

  const { getByText } = render(
    <Todo todo={todo} removeTodo={removeTodo} />
  );

  const taskElement = getByText('Finish homework');
  expect(taskElement).toBeInTheDocument();
});

test('calls removeTodo function when the remove button is clicked', () => {
  const todo = {
    id: 1,
    task: 'Finish homework',
  };
  const removeTodo = jest.fn();

  const { getByText } = render(
    <Todo todo={todo} removeTodo={removeTodo} />
  );

  const removeButton = getByText('X');
  fireEvent.click(removeButton);

  expect(removeTodo).toHaveBeenCalledTimes(1);
  expect(removeTodo).toHaveBeenCalledWith(1);
});
