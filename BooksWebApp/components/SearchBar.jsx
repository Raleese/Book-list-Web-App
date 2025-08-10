import '../styles/SearchBar.css';
import { useState } from 'react';

function SearchBar(){
    const [message, setMessage] = useState('');

    return(
        <form className='search-form'>
            <label className='search-label'>Search for books</label>
            <input className='search-input' type='text' placeholder='Harry Potter and the Half-Blooded Prince' onChange={(t) => setMessage(t.target.value)}></input>
            <p>{message}</p>
        </form>
    )
}

export default SearchBar;