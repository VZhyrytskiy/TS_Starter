
function getAllBooks() {
    
    let books = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    
    return books;
}

function logFirstAvailable(books): void {
    
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books) {
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    
    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available: ${firstAvailable}`);
}

// ---------------------------------------------
console.log(getAllBooks());

const allBooks = getAllBooks();
logFirstAvailable(allBooks);
