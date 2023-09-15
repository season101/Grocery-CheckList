import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('itemsStorage')) || []
  );
  if (!localStorage.getItem('itemsStorage')) {
    localStorage.setItem('itemsStorage', JSON.stringify(items));
  }

  const addItems = (newItem) => {
    const newItems = [
      ...items,
      { id: nanoid(), name: newItem, completed: false },
    ];
    setItems(newItems);
    localStorage.setItem('itemsStorage', JSON.stringify(newItems));
    toast.success('Item Added to the List.');
  };

  const removeItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem('itemsStorage', JSON.stringify(newItems));
    setItems(newItems);
    toast.success('Item Deleted.');
  };

  return (
    <section className="section-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      />
      <Form addItems={addItems} />
      <Items items={items} removeItems={removeItems} />
    </section>
  );
};

export default App;
