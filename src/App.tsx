import { useEffect, useState } from 'react';

import Content from './components/Content';
import Footer from './common/components/Footer';
import Header from './common/components/Header';
import AddItem from './components/AddItem';
import { Item } from './types/Item';
import Search from './common/components/Search';
import apiRequest from './common/apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [ items, setItems ] = useState<Item[]>([]);
  const [ newItem, setNewItem ] = useState('');
  const [ searchItem, setSearchItem ] = useState('');
  const [ fetchError, setFetchError ] = useState<unknown>(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setFetchError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    (async () => await getItems())();
  }, []);

  const addItem = async (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    if (items.find((item: Item) => item.item === newItem.item)) return alert('Item already exists');
    const listItems = [...items, newItem];
    setItems(listItems);

    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      };
      const result = await apiRequest(API_URL, postOptions);

      if (result instanceof Error) {
        setFetchError(result.message);
      } else {
        setFetchError(null);
      }
  }


  const handleChecked = async (id:number) => {
      const listItems = items.map((item: Item) => item.id === id ? {...item, 
      checked: !item.checked} : item);
      setItems(listItems);

      const item = listItems.filter((item: Item) => item.id === id);
      const putOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked: item[0].checked }),
      };
      const result = await apiRequest(`${API_URL}/${id}`, putOptions);

      if (result instanceof Error) {
        setFetchError(result.message);
      } else {
        setFetchError(null);
      }
  };

  const deleteItem = (id: number) => {
      const listItems = items.filter((item: Item) => item.id !== id);
      setItems(listItems);

      const deleteOptions = { method: 'DELETE' };
      const deleteResult = apiRequest(`${API_URL}/${id}`, deleteOptions);

      if (deleteResult instanceof Error) {
        setFetchError(deleteResult.message);
      } else {
        setFetchError(null);
      }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newItem === '') return;
      addItem(newItem);
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
      <main>
      { loading && <p>Loading...</p>}
      { !loading && !items.length && <p>Your list is empty.</p> }
      { fetchError ? (
        <p>{`Error: ${fetchError}`}</p>
      ) : (
        <Content
          items={items.filter((item: Item) => item.item.toLowerCase().includes(searchItem.toLowerCase()))}
          handleChecked={handleChecked}
          deleteItem={deleteItem}
        />
        )}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
