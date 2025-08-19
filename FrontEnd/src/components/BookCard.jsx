import '../styles/bookCard.css';
import { addFavorite } from '../api/calls';
import { getFavorites } from '../api/calls';
import { useState, useEffect } from 'react';

function BookCard({ bookTitle, coverUrl }) {

    const [favorite, setFavorite] = useState(false);

    const rating = 1;
    const status = 1;

    useEffect(() => {
        fetchFavorites();
    }, [bookTitle]); // re-check when book changes
    
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

    return (
        <div className='card-container'>
            {coverUrl ? (
                <img src={coverUrl} alt={`${bookTitle} cover`} />
            ) : (
                <div className='no-cover'>No cover</div>
            )}
            <p className='book-title'>{bookTitle}</p>
            {favorite === false ? (
                <button className='favorite-button' onClick={favoriteButton}>Favorite</button>
            ) : (
                <div className='book-status'>
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
                    <button className='remove-button' >Remove</button>
                </div>
            )}
        </div>
    );
}

export default BookCard;
