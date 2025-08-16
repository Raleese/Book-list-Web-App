import '../styles/bookCard.css';
import { addFavorite } from '../api/calls';

function BookCard({ bookTitle, coverUrl }) {

    const rating = 1;
    const status = 1;

    async function favoriteButton(){
        try{
            await addFavorite ({bookTitle, coverUrl, rating, status});
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div className='card-container'>
            {coverUrl ? (
                <img src={coverUrl} alt={`${bookTitle} cover`} />
            ) : (
                <div className='no-cover'>No cover</div>
            )}
            <p className='book-title'>{bookTitle}</p>
            <button className='favorite-button' onClick={favoriteButton}>Favorite</button>
            {/*
            <div className='book-status'>
                <div className='book-reading-status'>
                    <label>Status:</label>
                    <select>
                        <option>Read</option>
                        <option>Reading</option>
                        <option>Will read</option>
                    </select>
                </div>
                <div className='book-rating'>
                    <label>Rating:</label>
                    <select>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
            </div>
            */}
        </div>
    );
}

export default BookCard;
