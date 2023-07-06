import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('calls addTodo function with the correct task when the form is submitted', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <NewTodoForm addTodo={addTodo} />
  );

  const taskInput = getByPlaceholderText('Enter task');
  const addButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'Finish homework' } });
  fireEvent.click(addButton);

  expect(addTodo).toHaveBeenCalledTimes(1);
  expect(addTodo).toHaveBeenCalledWith('Finish homework');
});

test('does not call addTodo function when the form is submitted with an empty task', () => {
  const addTodo = jest.fn();
  const { getByText } = render(
    <NewTodoForm addTodo={addTodo} />
  );

  const addButton = getByText('Add Todo');

  fireEvent.click(addButton);

  expect(addTodo).not.toHaveBeenCalled();
});
