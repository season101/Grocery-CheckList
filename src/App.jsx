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

  return (
    <section className="section-center">
      <Form addItems={addItems} />
      <Items items={items} />
    </section>
  );
};

export default App;
