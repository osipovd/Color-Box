import React from 'react';

function Todo({ todo, removeTodo }) {
  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;
