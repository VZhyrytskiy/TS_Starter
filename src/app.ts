import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { purge, getAllBooks, getBookTitlesByCategory, logFirstAvailable,
    logBookTitles, getBookByID, createCustomerID, createCustomer, сheckoutBooks,
  getTitles, PrintBook, getBooksByCategory, logCategorySearch,
  getBooksByCategoryPromise } from './lib/utility-functions';
import RefBook from './encyclopedia';
import Shelf from './shelf';

// ---------------------------------------------
console.log(getAllBooks());

const allBooks = getAllBooks();
// logFirstAvailable(allBooks);
logFirstAvailable();

// const javaScriptBooks = getBookTitlesByCategory(Category.JavaScript);
const javaScriptBooks = getBookTitlesByCategory();
// logBookTitles(javaScriptBooks);
javaScriptBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

let myID = createCustomerID('Ann', 10);
console.log(myID);

// the names of parameters are not important 
let IdGenerator: (chars: string, num: number) => string;
IdGenerator = (name: string, id: number) => `${name}${id}`;
IdGenerator = createCustomerID;
myID = IdGenerator('Ann', 20);
console.log(myID);

createCustomer('Ann');
createCustomer('Boris', 6);
createCustomer('Clara', 12, 'Atlanta');

let myBooks: string[] = сheckoutBooks('Ann', 1, 3, 4);
myBooks.forEach(title => console.log(title));

let checkedOutBooks = getTitles(false);
checkedOutBooks.forEach(title => console.log(title));

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};
PrintBook(myBook);
myBook.markDamaged('missing back cover');

let logDamage: Logger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');

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
let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');

// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

let refBook: ReferenceItem = new RefBook('WorldPedia', 1900, 10);
refBook.printItem();

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// let purgedBooks: Array<Book> = purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNums: Array<number> = purge<number>([1, 2, 3, 4]);
// console.log(purgedNums);

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
magazineShelf.printTitles();
let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

let lib1 = new UniversityLibrarian();

try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib1.teachCommunity = () => console.log('teachCommunity replacement method');    
} catch (error) {
    console.log(error.message);
}

lib1.assistFaculty();
lib1.teachCommunity();


// Callback functions
console.log('Beginning search...');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('Search submitted...');

// Promises
console.log('Beginning search...');
getBooksByCategoryPromise(Category.Angular2)
    .then(titles => {
        console.log(`Found titles: ${titles}`);
        throw 'something bad happened';
        // return titles.length;
    }, reason => { return 0; })
    .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search submitted...');
