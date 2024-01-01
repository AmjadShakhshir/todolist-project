import React from 'react'

const Search = ({ searchItem, setSearchItem }: {
    searchItem: string,
    setSearchItem: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault() }>
            <label htmlFor="searchItem">Search Item</label>
            <input
                autoFocus
                type="text"
                id="searchItem"
                placeholder='Search Item'
                value={searchItem}
                onChange={(e) => {setSearchItem(e.target.value)}}
                required
            />
        </form>
    )
}

export default Search