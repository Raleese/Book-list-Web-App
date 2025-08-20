import BookCard from '../components/BookCard';
import { useState, useEffect } from 'react';
import { getFavorites } from '../api/calls';

function Favorites() {    
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    async function fetchFavorites() {
        try{
            const data = await getFavorites();

            setResults(
                data.map(book => ({
                    id: book.id,
                    title: book.title,
                    coverUrl: book.coverUrl
                }))
            );
        }
        catch (error){
            setResults([]);
            return;
        }
    }    

    return (
        <div className='book-container'>
            {results.map((book, index) => (
                <BookCard
                    key={index}
                    bookId={book.id}
                    bookTitle={book.title}
                    coverUrl={book.coverUrl}
               />
            ))
            }
        </div>
    );
}

export default Favorites;