import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;

