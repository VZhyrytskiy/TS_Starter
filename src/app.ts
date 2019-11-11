import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { ReferenceItem, UniversityLibrarian, Shelf } from './classes';
import RefBook from './classes/encyclopedia';
import Encyclopedia from './classes/encyclopedia';
import {
  purge,
  getAllBooks,
  getBookTitlesByCategory,
  logFirstAvailable,
  logBookTitles,
  getBookByID,
  createCustomerID,
  createCustomer,
  сheckoutBooks,
  getTitles,
  printBook,
  getBooksByCategory,
  logCategorySearch
} from './lib/utility-functions';

// ---------------------------------------------
// console.log(getAllBooks());

// const allBooks = getAllBooks();
// logFirstAvailable(allBooks);
// logFirstAvailable();

// const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
// const javaScriptBooks = getBookTitlesByCategory();
// logBookTitles(javaScriptBooks);
// javaScriptBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

let myID = createCustomerID('Ann', 10);
console.log(myID);

// the names of parameters are not important
let IdGenerator: (chars: string, num: number) => string;
IdGenerator = (name: string, id: number) => `${name}${id}`;
IdGenerator = createCustomerID;
myID = IdGenerator('Ann', 20);
console.log(myID);

// Task 05
createCustomer('Ann');
createCustomer('Boris', 6);
createCustomer('Clara', 12, 'Atlanta');

let myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
myBooks.forEach(title => console.log(title));

// Task 06
let checkedOutBooks = getTitles(false);
checkedOutBooks.forEach(title => console.log(title));

// Task 07
let myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};
printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 08, 15
let logDamage: Logger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');

// Task 09
let favoriteAuthor: Author = {
  email: 'Anna@gmail.com',
  name: 'Anna',
  numBooksPublished: 3
};

// let favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'Boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };

// Task 10
let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');

// Task 11
// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new RefBook('WorldPedia', 1900, 10);
// refBook.printItem();

// Task 12, 16
// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
let refBook: ReferenceItem = new RefBook('WorldPedia', 1900, 10);
refBook.printItem();

// Task 13
refBook.printCitation();

// Task 18
let inventory: Array<Book> = [
  {
    id: 10,
    title: 'The C Programming Language',
    author: 'K & R',
    available: true,
    category: Category.Software
  },
  {
    id: 11,
    title: 'Code Complete',
    author: 'Steve McConnell',
    available: true,
    category: Category.Software
  },
  {
    id: 12,
    title: '8-Bit Graphics with Cobol',
    author: 'A. B.',
    available: true,
    category: Category.Software
  },
  {
    id: 13,
    title: 'Cool autoexec.bat Scripts!',
    author: 'C. D.',
    available: true,
    category: Category.Software
  }
];
let purgedBooks: Array<Book> = purge<Book>(inventory);
purgedBooks.forEach(book => console.log(book.title));

let purgedNums: Array<number> = purge<number>([1, 2, 3, 4]);
console.log(purgedNums);

// Task 19
let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();
console.log(firstBook.title);

let magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];
let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(firstMagazine.title);

// Task 20
magazineShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

// Task 22
let fLibrarian = new UniversityLibrarian();
fLibrarian.name = 'Anna';
fLibrarian.assistCustomer('Boris');
fLibrarian['printLibrarian']();
console.log(fLibrarian);

// Task 23
// let lib1 = new UniversityLibrarian();

// try {
//   lib1.assistFaculty = () => console.log('assistFaculty replacement method');
//   lib1.teachCommunity = () => console.log('teachCommunity replacement method');
// } catch (error) {
//   console.log(error.message);
// }

// lib1.assistFaculty();
// lib1.teachCommunity();

// Task 24
// const enc = new Encyclopedia('Title', 2018, 3);
// enc.printItem();

// Task 25
// const librarian = new UniversityLibrarian();
// librarian.name = 'Ann';
// librarian.assistCustomer('Boris');

// Task 26
// const l = new UniversityLibrarian();
// l.name = 'Ann';
// console.log(l);
// console.log(l.name);
// l.assistCustomer('Boris');

// Task 27
// const e = new Encyclopedia('title', 2018, 3);
// e.copies = 13;
// console.log(e.copies);

// Task 28 Callback functions
// console.log('Beginning search...');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Search submitted...');
