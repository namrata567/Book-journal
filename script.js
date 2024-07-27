document.getElementById('new-book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create book element
    const book = document.createElement('div');
    book.classList.add('book');

    // If ISBN is provided, fetch the cover image
    if (isbn) {
        const img = document.createElement('img');
        img.src = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
        img.alt = `${title} cover`;
        book.appendChild(img);
    } else {
        book.innerText = `${title}\nby ${author}`;
    }

    // Add book to the first available shelf
    const shelves = document.querySelectorAll('.shelf');
    for (let shelf of shelves) {
        if (shelf.children.length < Math.floor(shelf.clientWidth / 70)) { // Assuming each book needs 70px width including gaps
            shelf.appendChild(book);
            break;
        }
    }

    // Clear form
    document.getElementById('new-book-form').reset();
});

// Function to add a new shelf
function addShelf() {
    const bookShelves = document.getElementById('book-shelves');
    const newShelf = document.createElement('div');
    newShelf.classList.add('shelf');
    bookShelves.appendChild(newShelf);
}

// Event listener for the add shelf button
document.getElementById('add-shelf-button').addEventListener('click', addShelf);

