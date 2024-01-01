import { FaTrashAlt } from 'react-icons/fa'
import { Item } from '../types/Item';

const LineItem = ({ item, handleChecked, deleteItem }: {
    item: Item;
    handleChecked: (id: number) => void;
    deleteItem: (id: number) => void;
}) => {
    return (
        <li className='item'>
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
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem