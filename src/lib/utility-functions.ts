import { Category } from './../enums';
import { Book } from './../interfaces';

export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
  let books = [
    {
      id: 1,
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

export function getBookTitlesByCategory(
  categoryFilter: Category = Category.JavaScript
): Array<string> {
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

export function logFirstAvailable(books = getAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
  console.log(`First Available: ${firstAvailable}`);
}

export function logBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

export function getBookByID(id: number): Book | undefined {
  const allBooks = getAllBooks();
  return allBooks.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
  return `${name}${id}`;
}

export function createCustomer(
  name: string,
  age?: number,
  city?: string
): void {
  console.log(`Creating customer ${name}`);

  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }
}

export function сheckoutBooks(
  customer: string,
  ...bookIDs: number[]
): string[] {
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
export function getTitles(bookProperty: any): string[] {
  const allBooks = getAllBooks();
  const foundTitles: string[] = [];

  if (typeof bookProperty === 'string') {
    // get all books by a particular author
    for (let book of allBooks) {
      if (book.author === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  } else if (typeof bookProperty === 'boolean') {
    // get all books based on specified availability
    for (let book of allBooks) {
      if (book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }
  return foundTitles;
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

export function getBooksByCategory(
  category: Category,
  callback: LibMgrCallback
): void {
  setTimeout(() => {
    try {
      let foundBooks: string[] = getBookTitlesByCategory(category);

      if (foundBooks.length > 0) {
        callback(null, foundBooks);
      } else {
        throw new Error('No books found.');
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
  if (err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(`Found the following titles:`);
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(cat: Category): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundBooks: string[] = getBookTitlesByCategory(cat);

      if (foundBooks.length > 0) {
        resolve(foundBooks);
      } else {
        reject('No books found for that category.');
      }
    }, 2000);
  });

    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}
