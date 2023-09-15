import React, { useState } from 'react';

const SingleItem = ({ item }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        completed={isChecked.toString()}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <p style={isChecked ? { textDecoration: 'line-through' } : {}}>{name}</p>
      <button type="button" className="btn remove-btn" onClick={() => {}}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
