function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

showHello('greeting', 'TypeScript');

import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, RefBook, Shelf } from './classes';
import { assertStringValue, getAllBooks, bookTitleTransform, createCustomer, createCustomerID, getBookAuthorByIndex, getBookByID, getBookProp, getBookTitlesByCategory, getTitles, logBookTitles, logFirstAvailable, printBook, сheckoutBooks, purge } from './functions';
import { BookRequiredFields, createCustomerFunctionType, UpdatedBook } from './types';
import Encyclopedia from './classes/encyclopedia';

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
// let myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// let logDamage: Logger;
// logDamage = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('coffee stains');

// Task 04.03
// let favoriteAuthor: Author = {
//   email: 'Anna@gmail.com',
//   name: 'Anna',
//   numBooksPublished: 3
// };

// let favoriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'Boris@gmail.com',
//   department: 'Classical Literature',
//   assistCustomer: (name: string) => console.log(`Assist ${name}`)
// };

// Task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };

// console.log(offer?.magazine);

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));        // Refactoring JavaScript
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));  // undefined
// console.log(getBookProp(getAllBooks()[0], 'isbn'));      // error

// Task 05.01
// let ref: ReferenceItem = new ReferenceItem(1, 'Updated Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);
// console.log(ref);
// console.log(ref.getID());

// Task 05.02
// let refBook: ReferenceItem = new Encyclopedia(1, 'WorldPedia', 1900, 10);
// refBook.printItem();

// Task 05.03
// let refBook: ReferenceItem = new Encyclopedia(1, 'WorldPedia', 1900, 10);
// refBook.printCitation();

// Task 05.04
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'anna@example.com',
//   author: 'Boris',
//   available: true,
//   category: Category.HTML,
//   id: 1,
//   title: 'Introduction to HTML'
// };
// console.log(personBook);

// Task 06.03
// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
let refBook: ReferenceItem = new RefBook(1, 'WorldPedia', 1900, 10);
refBook.printItem();

// Task 06.05
// import('./classes').then(module => {
//     const reader = new module.Reader();
//     console.log(reader);
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[1]);
// });

// Task 06.06
import type { Library } from './classes';
// const lib: Library = new Library();
const lib: Library = {
    id: 1,
    name: 'Vernadsky National Library of Ukraine',
    address: 'Kyiv,  Holosiivskyi Avenue, 3'
};
console.log(lib);

// Task 07.01
// let inventory: Array<Book> = [
//     {
//       id: 10,
//       title: 'The C Programming Language',
//       author: 'K & R',
//       available: true,
//       category: Category.Software
//     },
//     {
//       id: 11,
//       title: 'Code Complete',
//       author: 'Steve McConnell',
//       available: true,
//       category: Category.Software
//     },
//     {
//       id: 12,
//       title: '8-Bit Graphics with Cobol',
//       author: 'A. B.',
//       available: true,
//       category: Category.Software
//     },
//     {
//       id: 13,
//       title: 'Cool autoexec.bat Scripts!',
//       author: 'C. D.',
//       available: true,
//       category: Category.Software
//     }
//   ];

//   let purgedBooks: Array<Book> = purge<Book>(inventory);
//   console.log(purgedBooks);

//   let purgedNums: Array<number> = purge<number>([1, 2, 3, 4]);
//   console.log(purgedNums);

// Task 07.02
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

// Task 07.03
// magazineShelf.printTitles();
// let softwareBook = bookShelf.find('Code Complete');
// console.log(`${softwareBook.title} (${softwareBook.author})`);

// Task 07.04
// const book: BookRequiredFields = {
//   id: 1,
//   title: 'Refactoring JavaScript',
//   author: 'Evan Burchard',
//   available: true,
//   category: Category.JavaScript,
//   markDamaged: null,
//   pages: 200
// };

// const updatedBook: UpdatedBook = {
//   id: 1,
//   title: 'Refactoring JavaScript'
// };


// const params: Parameters<createCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01
// let favoriteLibrarian: any = new UniversityLibrarian();

// Task 08.02
// let fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// fLibrarian['printLibrarian']();
// console.log(fLibrarian);

// Task 08.03
// let lib = new UniversityLibrarian();

// try {
//   lib.assistFaculty = () => console.log('assistFaculty replacement method');
//   lib.teachCommunity = () => console.log('teachCommunity replacement method');
// } catch (error) {
//   console.log(error.message);
// }

// lib.assistFaculty();
// lib.teachCommunity();

// Task 08.04
// const enc = new Encyclopedia(1, 'Title', 2018, 3);
// enc.printItem();

// Task 08.05
const librarian = new UniversityLibrarian();
librarian.name = 'Ann';
librarian.assistCustomer('Boris');
