import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit}: {
    newItem: string,
    setNewItem: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                type="text"
                id="addItem"
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
            />
            <button
                type="submit"
                aria-label='Add Item'
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem