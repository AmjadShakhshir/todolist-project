import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit}: {
        newItem: string,
        setNewItem: React.Dispatch<React.SetStateAction<string>>,
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    }) => {
        const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
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
                onClick={() => inputRef.current?.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem