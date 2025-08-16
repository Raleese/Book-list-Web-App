export async function searchBooks(title) {
    const request = encodeURIComponent(title).replace(/%20/g, "+");
    const response = await fetch(`https://openlibrary.org/search.json?q=${request}`);
    const data = await response.json();
    return data;
}
export async function addFavorite({bookTitle, coverUrl}) {
    const response = await fetch('http://localhost:5092/api/book', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            Title: bookTitle,
            CoverUrl: coverUrl,
        })
    });
    return response.json();
}
