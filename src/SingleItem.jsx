import React, { useState } from 'react';

const SingleItem = ({ item, removeItems }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        id="checkbox"
        type="checkbox"
        completed={isChecked.toString()}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label
        forHTML=""
        style={isChecked ? { textDecoration: 'line-through' } : {}}
      >
        {name}
      </label>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItems(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
