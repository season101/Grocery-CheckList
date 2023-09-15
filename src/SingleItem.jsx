import React from 'react';

const SingleItem = ({ item, removeItems, editItems }) => {
  const { id, name, completed } = item;
  console.log(typeof completed);
  return (
    <div className="single-item">
      <label style={completed ? { textDecoration: 'line-through' } : {}}>
        <input
          id="checkbox"
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            editItems(id);
          }}
        />
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
