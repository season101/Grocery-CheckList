import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (newItem) => {
    const newItems = [
      ...items,
      { id: nanoid(), name: newItem, completed: false },
    ];
    setItems(newItems);
  };

  const removeItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Form addItems={addItems} />
      <Items items={items} removeItems={removeItems} />
    </section>
  );
};

export default App;
