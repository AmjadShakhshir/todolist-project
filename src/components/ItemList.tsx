import { FaTrashAlt } from 'react-icons/fa'
import { Item } from '../types/Item';

const ItemList = ({ key, item, handleChecked, deleteItem }: {
    key: number;
    item: Item;
    handleChecked: (id: number) => void;
    deleteItem: (id: number) => void;
}) => {
    return (
        <li className='item' key={key}>
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