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
      <h4>Grocery Checklist</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
