/* eslint-disable no-redeclare */
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular2,
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: (reason: string) => void;
}

function getAllBooks(): readonly Book[] {
    let books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.JavaScript,
        },
    ];

    return books;
}

function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailableBookTitle: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailableBookTitle = currentBook.title;
            break;
        }

        console.log(`Total Books: ${numberOfBooks}`);
        console.log(`First Available Book: ${firstAvailableBookTitle}`);
    }
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    console.log(`Getting books in category: ${Category[category]}`);

    return getAllBooks()
        .filter(book => book['category'] === category)
        .map(book => book['title']);
}

function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    const result: [title: string, author: string] = [title, author];
    return result;
}

function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    let result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    return result;
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function getBookByID(id: number): any {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    let titles: string[] = [];

    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if (book?.available) titles.push(book.title);
    });

    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 0) {
        return [];
    } else if (args.length === 1) {
        const arg = args[0];

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const id = args[0];
        const available = args[1];

        if (typeof id === 'number' && available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string.');
    }
}

function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// ---------------------------------------------
// Task 02.01
// console.log(getAllBooks());

// const allBooks = getAllBooks();
// logFirstAvailable(allBooks);

// const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(javaScriptBooks);

// const titleAndAuthor = getBookAuthorByIndex(2);
// console.log(titleAndAuthor);

// console.log(calcTotalPages());

// Task 03.02
// let myID = createCustomerID('Ann', 10);
// console.log(myID);

// // the names of parameters are not important
// let IdGenerator: (chars: string, num: number) => string;
// IdGenerator = (name: string, id: number) => `${name}${id}`;
// IdGenerator = createCustomerID;
// myID = IdGenerator('Ann', 20);
// console.log(myID);

// Task 03.03
// createCustomer('Ann');
// createCustomer('Boris', 6);
// createCustomer('Clara', 12, 'Atlanta');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// logFirstAvailable();
// console.log(getBookByID(1));

// let myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
// console.log(myBooks);

// Task 03.04
// let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.05
// const title1 = getAllBooks()[0].title;
// const title2 = 11;
// const result1 = bookTitleTransform(title1);
// console.log(result1);
// const result2 = bookTitleTransform(title2);
// console.log(result2);

// Task 04.01
// Task 07
let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
};
printBook(myBook);
myBook.markDamaged('missing back cover');
