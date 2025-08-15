export async function searchBooks(title) {
    const request = encodeURIComponent(title).replace(/%20/g, "+");
    const response = await fetch(`https://openlibrary.org/search.json?q=${request}`);
    const data = await response.json();
    return data;
}
export async function addFavorite(title) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${request}`);
    return response.json();
}
