function SearchBar(){
    return(
        <form className='search-form'>
            <label className='search-label'>Search for books</label>
            <input className='search-input' type='text' placeholder='Harry Potter and the Half-Blooded Prince'></input>
        </form>
    )
}

export default SearchBar;