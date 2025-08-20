import '../styles/bookCard.css';
import { addFavorite, getFavorites, removeFavorite } from '../api/calls';
import { useState, useEffect } from 'react';

function BookCard({bookId, bookTitle, coverUrl }) {

    const [favorite, setFavorite] = useState(false);
    const [removeText, setRemoveText] = useState('Remove');

    const rating = 1;
    const status = 1;

    useEffect(() => {
        fetchFavorites();
    }, []);
    
    async function fetchFavorites() {
        try{
            const data = await getFavorites();
            const exists = data.some(fav => fav.title === bookTitle);

            if (exists) setFavorite(true);
        }
        catch (error){
            return;
        }
    } 

    async function favoriteButton(){
        await addFavorite ({bookTitle, coverUrl, rating, status});
        setFavorite(true);
    }

    async function removeButton() {
        await removeFavorite (bookId);
        setRemoveText('Removed successfully');
    }

    return (
        <div className='card-container'>
            <div className='book-title'>{bookTitle}</div>
            {coverUrl ? (
                <img src={coverUrl} alt={`${bookTitle} cover`} />
            ) : (
                <div className='no-cover'>No cover</div>
            )}
            {favorite === false ? (
                <button className='favorite-button' onClick={favoriteButton}>Favorite</button>
            ) : (
                <div className='book-status'>
                    <div className='upper-part'>
                        <div className='book-reading-status'>
                            <label>Status:</label>
                            <select>
                                <option>-</option>
                                <option>Read</option>
                                <option>Reading</option>
                                <option>Will read</option>
                            </select>
                        </div>
                        <div className='book-rating'>
                            <label>Rating:</label>
                            <select>
                                <option>-</option>
                                <option>⭐</option>
                                <option>⭐⭐</option>
                                <option>⭐⭐⭐</option>
                                <option>⭐⭐⭐⭐</option>
                                <option>⭐⭐⭐⭐⭐</option>
                            </select>
                        </div>
                    </div>
                    <div className='lower-part'>
                        <button className='remove-button' onClick={removeButton}>{removeText}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookCard;
