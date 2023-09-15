import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.warning('please enter a value');
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
