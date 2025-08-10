import '../styles/SearchBar.css';
import { useState } from 'react';

function SearchBar(){
    const [message, setMessage] = useState('');

    async function submitForm(event){
        event.preventDefault();
    }

    return(
        <form className='search-form' onSubmit={submitForm}>
            <label className='search-label'>Search for books</label>
            <input className='search-input' type='text' placeholder='Harry Potter and the Half-Blooded Prince' onChange={(t) => setMessage(t.target.value)}></input>
            <p>{message}</p>
        </form>
    )
}

export default SearchBar;