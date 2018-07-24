import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { purge } from './lib/utility-functions';
import RefBook from './encyclopedia';
import Shelf from './shelf';
import Encyclopedia from './encyclopedia';

function getAllBooks(): Book[] {
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

function logFirstAvailable(books = getAllBooks()): void {
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

function getBookTitlesByCategory(
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

function logBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

function getBookByID(id: number): Book | undefined {
  const allBooks = getAllBooks();
  return allBooks.find(book => book.id === id);
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

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
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

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
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

function PrintBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

// ---------------------------------------------
// console.log(getAllBooks());

// const allBooks = getAllBooks();
// logFirstAvailable(allBooks);
logFirstAvailable();

// const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
// const javaScriptBooks = getBookTitlesByCategory();
// logBookTitles(javaScriptBooks);
// javaScriptBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

// let myID = createCustomerID('Ann', 10);
// console.log(myID);

// the names of parameters are not important
// let IdGenerator: (chars: string, num: number) => string;
// IdGenerator = (name: string, id: number) => `${name}${id}`;
// IdGenerator = createCustomerID;
// myID = IdGenerator('Ann', 20);
// console.log(myID);

// createCustomer('Ann');
// createCustomer('Boris', 6);
// createCustomer('Clara', 12, 'Atlanta');

// let myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// let checkedOutBooks = getTitles(false);
// checkedOutBooks.forEach(title => console.log(title));

// let myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// PrintBook(myBook);
// myBook.markDamaged('missing back cover');

// let logDamage: Logger;
// logDamage = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('coffee stains');

// let favoriteAuthor: Author = {
//   email: 'Anna@gmail.com',
//   name: 'Anna',
//   numBooksPublished: 3
// };

// let favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'Boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new RefBook('WorldPedia', 1900, 10);
// refBook.printItem();

// let inventory: Array<Book> = [
//   {
//     id: 10,
//     title: 'The C Programming Language',
//     author: 'K & R',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 11,
//     title: 'Code Complete',
//     author: 'Steve McConnell',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 12,
//     title: '8-Bit Graphics with Cobol',
//     author: 'A. B.',
//     available: true,
//     category: Category.Software
//   },
//   {
//     id: 13,
//     title: 'Cool autoexec.bat Scripts!',
//     author: 'C. D.',
//     available: true,
//     category: Category.Software
//   }
// ];
// let purgedBooks: Array<Book> = purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNums: Array<number> = purge<number>([1, 2, 3, 4]);
// console.log(purgedNums);

// let bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// let firstBook: Book = bookShelf.getFirst();
// console.log(firstBook.title);

// let magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// let firstMagazine: Magazine = magazineShelf.getFirst();
// console.log(firstMagazine.title);
// magazineShelf.printTitles();
// let softwareBook = bookShelf.find('Code Complete');
// console.log(`${softwareBook.title} (${softwareBook.author})`);

// Task 20.2
// let fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// fLibrarian['printLibrarian']();
// console.log(fLibrarian);

// Task 20.3
// const enc = new Encyclopedia('Title', 2018, 3);
// enc.printItem();

// Task 21.1
let lib1 = new UniversityLibrarian();

try {
  lib1.assistFaculty = () => console.log('assistFaculty replacement method');
  lib1.teachCommunity = () => console.log('teachCommunity replacement method');
} catch (error) {
  console.log(error.message);
}

lib1.assistFaculty();
lib1.teachCommunity();
