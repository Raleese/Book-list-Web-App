import '../styles/Home.css';
import { useState } from 'react';
import { searchBooks } from '../api/calls';
import BookCard from '../components/BookCard';

function Home() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    async function submitForm(event) {
        event.preventDefault();
        if (!query || query.trim() === '') return;

        try{
            const data = await searchBooks(query);
            if (Array.isArray(data.docs)) {
                setResults(
                    data.docs.map(book => ({
                        title: book.title,
                        coverUrl: book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                            : null
                    }))
                );
            } else {
                setResults([]);
            }
        }
        catch (error){
            return;
        }
    }

    return (
        <div className='home-page'>
            <form className='search-form' onSubmit={submitForm}>
                <label className='search-label'>Search for books</label>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Type the title of the book(s)'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            <div className='book-container'>
                {results.map((book, index) => (
                    <BookCard
                        key={index}
                        bookTitle={book.title}
                        coverUrl={book.coverUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;