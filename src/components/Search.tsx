import React, { useState } from 'react';

const EMPTY = ''

export default ({ onSearch }) => {

    const [search, setSearch] = useState(EMPTY);

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        onSearch(search);
    }

    const handleClear = () => {
        setSearch(EMPTY);
        onSearch(EMPTY);
    }

    const isFilledStyle = `search-box ${search.length > 0 && 'btn btn-danger ms-2 search-box-active'}` 

    return (
        <span className='d-flex flex-row m-1' >
            <input
                data-testid="search-input"
                value={search}
                onChange={onChange}
                className='form-control '
                type="text"
                placeholder="Search" />

            <button
                data-testid="clear-button"
                onClick={handleClear}
                className={isFilledStyle} >
                Clear
            </button>

            <button
                onClick={handleSearch}
                className='btn btn-primary ms-2' >
                Search
            </button>
        </span>
    );
}

