import * as Interfaces from './interfaces';
import { sealed, logger, writable, timeout } from './decorators';


@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty.');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community.');
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    @timeout(2000)
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

export { UniversityLibrarian, ReferenceItem };

