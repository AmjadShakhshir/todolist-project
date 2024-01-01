import { useState } from 'react';

import Content from './components/Content';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AddItem from './components/AddItem';

function App() {
  const [ items, setItems ] = useState([
        {
            id: 1,
            checked: false,
            item: 'Have you finished your homework?'
        },
        {
            id: 2,
            checked: true,
            item: 'Do the dishes'
        },
        {
            id: 3,
            checked: false,
            item: 'Travel to Hämeenlinna'
        }
    ]);
    const [ newItem, setNewItem ] = useState('');

    const handleChecked = (id:number) => {
        const listItems = items.map((item) => item.id === id ? {...item, 
        checked: !item.checked} : item);
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    };

    const deleteItem = (id: number) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newItem === '') return;
        const listItems = [...items, {id: items.length + 1, checked: false, item: newItem}];
        setItems(listItems)
        localStorage.setItem('shoppingList', JSON.stringify(listItems))
        setNewItem('')
    }
    
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleChecked={handleChecked}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
