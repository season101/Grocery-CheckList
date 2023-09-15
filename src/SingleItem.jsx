import React from 'react';

const SingleItem = ({ item }) => {
  const { id, name, completed } = item;
  return (
    <div>
      <input type="checkbox" completed={completed.toString()} />
      <p>{name}</p>
    </div>
  );
};

export default SingleItem;
