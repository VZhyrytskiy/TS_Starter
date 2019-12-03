import * as Interfaces from '../interfaces';
import { sealed } from './../decorators';

@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(this.name + ' is assisting ' + custName);
  }
}
