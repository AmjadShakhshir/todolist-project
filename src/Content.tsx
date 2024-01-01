import { FaTrashAlt } from 'react-icons/fa'

type Item = {
    id: number;
    checked: boolean;
    item: string;
};

const Content = ({ items, handleChecked, deleteItem}: 
    { 
        items: Item[];
        handleChecked: (id: number) => void;
        deleteItem: (id: number) => void;
    }) => {

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