import ItemList from './ItemList';
import { Item } from '../types/Item';

const ItemsList = ({ items, handleChecked, deleteItem }: { 
        items: Item[],
        handleChecked: (id: number) => void;
        deleteItem: (id: number) => void;
    }) => {
    return (
        <ul>
            { items.map((item) =>  
                <ItemList 
                    key={item.id}
                    item={item}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                />
            )}
        </ul>
    )
}

export default ItemsList