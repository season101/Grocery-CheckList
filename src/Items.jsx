import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ items, removeItems }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem key={item.id} item={item} removeItems={removeItems} />
        );
      })}
    </div>
  );
};

export default Items;
