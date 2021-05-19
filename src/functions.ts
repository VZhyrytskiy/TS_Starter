import { Book } from './interfaces';
import { BookProperties, BookOrUndefined } from './types';
import { Category } from './enums';
import RefBook from './encyclopedia';

export function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function getAllBooks(): readonly Book[] {
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

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailableBookTitle: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailableBookTitle = currentBook.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${firstAvailableBookTitle}`);
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): Array<string> {
    console.log(`Getting books in category: ${Category[categoryFilter]}`);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

export function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const allBooks = getAllBooks();
    return allBooks.find(book => book.id === id);
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

// export function calcTotalPages(): BigInt {
//   const data = <const>[
//     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//   ];

//   let result = data.reduce((acc: bigint, obj) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//   }, 0n);

//   return result;
// }

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`);

    let booksCheckedOut: string[] = [];

    for (let id of bookIDs) {
        let book = getBookByID(id);
        if (book && book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
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

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string.');
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// Автор: Yevhen_Zakharevych@epam.com
function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}
	

	
