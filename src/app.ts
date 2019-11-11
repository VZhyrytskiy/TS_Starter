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
  Angular2
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger;
}

interface DamageLogger {
  (reason: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

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

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

abstract class ReferenceItem {
  // title: string;
  // year: number;
  private _publisher: string;
  static department: string = 'Research';

  // constructor(newTitle: string, newYear: number) {
  //     console.log('Creating a new ReferenceItem...');
  //     this.title = newTitle;
  //     this.year = newYear;
  // }

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

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

// Task 08
let logDamage: DamageLogger;
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

// Task 12
let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
refBook.printItem();

// Task 13
refBook.printCitation();
