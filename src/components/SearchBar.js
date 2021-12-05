import React from 'react'

const SearchBar = ({isLoading, handleSubmit, query, setQuery}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search Recipes"
                value={query}
                className="form-control"
                name="query"
                disabled={isLoading}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn"
                value="Search"
            />
            
        </form>
    )
}

export default SearchBar
