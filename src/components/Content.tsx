import ItemsList from './ItemsList';

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
                <ItemsList 
                    items={items}
                    handleChecked={handleChecked}
                    deleteItem={deleteItem}
                />
            ) : (
                <p>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content