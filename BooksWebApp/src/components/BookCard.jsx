import '../styles/bookCard.css';

function BookCard({ bookTitle, coverUrl }) {
    return (
        <div className='card-container'>
            {coverUrl ? (
                <img src={coverUrl} alt={`${bookTitle} cover`} />
            ) : (
                <div className='no-cover'>No cover</div>
            )}
            <p>{bookTitle}</p>
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
        </div>
    );
}

export default BookCard;
