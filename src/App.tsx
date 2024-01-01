import { useEffect, useState } from 'react';

import Content from './components/Content';
import Footer from './common/components/Footer';
import Header from './common/components/Header';
import AddItem from './components/AddItem';
import { Item } from './types/Item';
import Search from './common/components/Search';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [ items, setItems ] = useState<Item[]>([]);
  const [ newItem, setNewItem ] = useState('');
  const [ searchItem, setSearchItem ] = useState('');

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    (async () => await getItems())();
  }, []);


  const setAndSaveItems = (newItems: Item[]) => {
      setItems(newItems);
      localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const handleChecked = (id:number) => {
      const listItems = items.map((item: Item) => item.id === id ? {...item, 
      checked: !item.checked} : item);
      setAndSaveItems(listItems)
  };

  const deleteItem = (id: number) => {
      const listItems = items.filter((item: Item) => item.id !== id);
      setAndSaveItems(listItems)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newItem === '') return;
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const listItems = [...items, { id, checked: false, item: newItem}];
      setAndSaveItems(listItems);
      setNewItem('');
  }
    
  return (
    <div className="App">
      <Header
        title="Grocery List"
        />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Content
        items={items.filter((item: Item) => item.item.toLowerCase().includes(searchItem.toLowerCase()))}
        handleChecked={handleChecked}
        deleteItem={deleteItem}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
