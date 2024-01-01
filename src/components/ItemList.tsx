import { FaTrashAlt } from 'react-icons/fa'
import { Item } from '../types/Item';

const ItemList = ({ item, handleChecked, deleteItem }: {
    item: Item;
    handleChecked: (id: number) => void;
    deleteItem: (id: number) => void;
}) => {
    return (
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
    )
}

export default ItemList