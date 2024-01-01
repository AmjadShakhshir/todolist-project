import { FaTrashAlt } from 'react-icons/fa'

type Item = {
    id: number;
    checked: boolean;
    item: string;
};

const Content = ({ items, setItems}: 
    { 
        items: Item[],
        setItems: React.Dispatch<React.SetStateAction<Item[]>>
    }) => {
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

    return (
        <main>
            { items.length ? (
                <ul>
                    {items.map((item) =>  
                        <li className='item' key={item.id}>
                            <input
                            onChange={() => handleChecked(item.id)}
                            type="checkbox"
                            checked={item.checked}
                            />
                            <label>{item.item }</label>
                            <FaTrashAlt 
                                role="button"
                                tabIndex={0}
                                onClick={() => deleteItem(item.id)}
                            />
                        </li>
                    )}
                </ul>
            ) : (
                <p>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content