import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [widthInches, setWidthInches] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const width = convertToPixels(widthInches);
    const height = convertToPixels(heightInches);
    const newBox = {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
    };
    addBox(newBox);
    setWidthInches('');
    setHeightInches('');
    setBackgroundColor('');
  };

  const convertToPixels = (inches) => {
    const dpi = 96; // Assuming a standard DPI value
    return Math.round(inches * dpi);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width (inches):</label>
      <input
        type="text"
        id="width"
        value={widthInches}
        onChange={(e) => setWidthInches(e.target.value)}
      />
      <label htmlFor="height">Height (inches):</label>
      <input
        type="text"
        id="height"
        value={heightInches}
        onChange={(e) => setHeightInches(e.target.value)}
      />
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="text"
        id="backgroundColor"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;


