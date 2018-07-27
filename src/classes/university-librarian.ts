import * as Interfaces from '../interfaces';
import { sealed, logger, writable } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
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
