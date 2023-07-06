import React from 'react';

function Box({ index, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
  };

  const handleRemove = () => {
    removeBox(index);
  };

  return (
    <div data-testid="box" style={boxStyle}>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
