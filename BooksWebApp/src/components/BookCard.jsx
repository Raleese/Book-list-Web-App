import '../styles/bookCard.css';
import { useState } from 'react';

function BookCard(){
    return(
        <div className='card-container'>
            <img alt='Book cover'></img>
            <p>Book title</p>
            <div className='book-status'>
                <div className='book-reading-status'>
                    <label>Select reading status:</label>
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
        </div>
    )
}

export default BookCard;