
enum Category { JavaScript, CSS, HTML, TypeScript, Angular2 };

function getAllBooks() {
    
    let books =[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
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

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log(`Getting books in category: ${Category[categoryFilter]}`);
    
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];
    
    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    
    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for(let title of titles) {
        console.log(title);
    }
}

function getBookByID(id: number) {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

// ---------------------------------------------
console.log(getAllBooks());

const allBooks = getAllBooks();
logFirstAvailable(allBooks);

const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(javaScriptBooks);
javaScriptBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
