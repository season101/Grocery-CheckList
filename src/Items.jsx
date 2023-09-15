import React from 'react';
import SingleItem from './SingleItem';

const Items = ({ items, removeItems, editItems }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItems={removeItems}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
};

export default Items;
