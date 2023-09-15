import React, { useState } from 'react';

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      console.log('Empty Value');
      return;
    }

    addItems(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;
