import { useState } from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

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
    
  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        setItems={setItems}
      />
      <Footer />
    </div>
  );
}

export default App;
